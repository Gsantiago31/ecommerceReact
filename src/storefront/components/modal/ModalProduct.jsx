import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Grid, IconButton} from "@mui/material";
import { Gallery } from "./Gallery";
import { useDispatch, useSelector } from "react-redux";
import { CatalogProduct } from "../product";
import { useState } from "react";
import {
  Favorite,
  FavoriteBorderOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import {
  setActiveWishProduct,
  startDeleteWishProduct,
  startNewCartProduct,
  startNewWishProduct,
} from "../../../store/storefront";
import { RatingComponent } from "../store";
import { useEffect } from "react";
import { Notification } from "../notification";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "20px 0px 0px 20px",
  boxShadow: 24,
  p: 4,
  overflowY: "auto", // Agregado para permitir scroll en el contenido del modal
};


export const ModalProduct = ({
  id,
  category,
  imageUrls = [],
  price,
  title,
  size,
  description,
  shortDescription,
  open,
  onClose,
  quantity
}) => {
  // const [close, setClose] = useState(false);
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationCount, setNotificationCount] = useState(0);
  const { products } = useSelector((state) => state.storefront);
  const { wishList } = useSelector((state) => state.storefront);
  const [wish, setWish] = useState(wishList.some((objeto) => objeto.id === id));

  const isProductInWishlist = () => wishList.some((objeto) => objeto.id === id);
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setClose(false)

  const dispatch = useDispatch();

  const handleShowContent1 = () => {
    setShowContent1(true);
    setShowContent2(false);
  };

  const handleShowContent2 = () => {
    setShowContent1(false);
    setShowContent2(true);
  };

  const addProductToWishlist = () => {
    setWish(true);
    dispatch(startNewWishProduct(id, imageUrls, price, title));
  };

  const removeProductFromWishlist = () => {
    setWish(false);
    dispatch(startDeleteWishProduct(id));
  };

  const onWishSelected = () => {
    dispatch(setActiveWishProduct(id));

    if (isProductInWishlist()) {
      removeProductFromWishlist();
      setShowNotification(true);
      setNotificationMessage("¡Se ha eliminado de tu lista de deseos!");
      setIsSuccess(false);
      setNotificationCount((prevCount) => prevCount + 1);
    } else {
      addProductToWishlist();
      setShowNotification(true);
      setNotificationMessage("¡Producto agregado a tu lista de deseos!");
      setIsSuccess(true);
      setNotificationCount((prevCount) => prevCount + 1);
    }

    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage("");
      setNotificationCount((prevCount) => prevCount - 1);
    }, 3000);
  };

  useEffect(() => {
    setWish(isProductInWishlist());
  }, [wishList]);

  const OnClickCart = () => {
    dispatch(startNewCartProduct(imageUrls, price, title, quantity));
    setShowNotification(true);
    setNotificationMessage("¡Producto agregado al carrito!");
    setIsSuccess(true);

    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage("");
    }, 3000);
  };

  const [isAvailable, setIsAvailable] = useState(quantity > 0);

  useEffect(() => {
    setIsAvailable(quantity > 0);
  }, [quantity]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container mb={2}>
              <Grid item xs={6} md={4}>
                <Button
                  onClick={handleShowContent1}
                  variant={showContent1 ? "contained" : "text"}
                  sx={{
                    bgcolor: showContent1 ? "secondary.main" : "transparent",
                    color: showContent1 ? "common.white" : "inherit",
                    "&:hover": {
                      bgcolor: showContent1 ? "primary.dark" : "transparent",
                    },
                  }}
                >
                  Resumen
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                md={8}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Button
                  onClick={handleShowContent2}
                  variant={showContent2 ? "contained" : "text"}
                  sx={{
                    bgcolor: showContent2 ? "secondary.main" : "transparent",
                    color: showContent2 ? "common.white" : "inherit",
                    "&:hover": {
                      bgcolor: showContent2 ? "primary.dark" : "transparent",
                    },
                  }}
                >
                  Relacionados
                </Button>
              </Grid>
            </Grid>
            {showContent1 && (
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={8}>
                  <Gallery
                    id={id}
                    imageUrls={imageUrls}
                    price={price}
                    title={title}
                    size={size}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    marginTop: { xs: "5%", md: "0px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography variant="h4">{title}</Typography>
                  <Divider
                    sx={{
                      height: "2px",
                      width: "100%",
                      border: "1px solid black",
                    }}
                  />
                  <Typography variant="body1">{shortDescription}</Typography>
                  <Typography variant="body2">{description}</Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "5%",
                    }}
                  >
                    <Typography variant="h5">$ {price}.00</Typography>
                    {/* <RatingComponent id={id}/> */}
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "5%",
                    }}
                  >
                    <IconButton
                      onClick={onWishSelected}
                      sx={{ color: "dashboard.secondary" }}
                    >
                      {wish ? <Favorite /> : <FavoriteBorderOutlined />}
                    </IconButton>
                    <IconButton onClick={OnClickCart} disabled={!isAvailable}>
                      <ShoppingCart />
                      <Typography>Añadir al carrito</Typography>
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            )}
            {showContent2 && (
              <Grid container>
                {products.map((product) => (
                  <CatalogProduct key={product.id} {...product} size={3} />
                ))}
              </Grid>
            )}
          </Box>
        </Fade>
        
      </Modal>
     {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
          isSuccess={isSuccess}
          zIndex={notificationCount}
        />
      )}
    </div>
  );
};