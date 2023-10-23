import {
  Favorite,
  FavoriteBorderOutlined,
  Share,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveWishProduct,
  startDeleteWishProduct,
  startNewCartProduct,
  startNewWishProduct,
} from "../../../store/storefront";
import { ModalProduct } from "../modal";
import { Notification } from "../notification";

export const CatalogProduct = ({imageUrls,id,
  title,
  description,
  shortDescription,
  tags,
  category,
  color,
  price,
  date,
  rating,
  quantity,
  size,
  weight}) => {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.storefront);
  const [wish, setWish] = useState(wishList.some((objeto) => objeto.id === id));
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const isProductInWishlist = () => wishList.some((objeto) => objeto.id === id);
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [isAvailable, setIsAvailable] = useState(quantity > 0);

useEffect(() => {
  setIsAvailable(quantity > 0);
}, [quantity]);


  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={4}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalProduct
  open={isModalOpen}
  onClose={handleCloseModal}
  id={id}
  imageUrls={imageUrls}
  price={price}
  title={title}
  size={size}
  description={description}
  shortDescription={shortDescription}
  category={category}
  quantity={quantity}  // Asegúrate de pasar el valor de quantity aquí
  weight={weight}  // Asegúrate de pasar el valor de weight aquí
/>
      <Card sx={{ width: 300, m: "20px" }}>
        <CardActionArea onClick={handleOpenModal}>
          {!isAvailable && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                position: "absolute",
                top: 100,
                left: 0,
                right: 110,
                backgroundColor: "red",
                color: "white",
                padding: "4px",
                textAlign: "center",
                transform: "rotate(-45deg)", // Rotación de 45 grados en sentido antihorario
                transformOrigin: "0 100%", // Origen de la rotación en la esquina inferior izquierda
              }}
            >
              No disponible
            </Typography>
          )}
          <CardMedia
            component="img"
            height="200"
            image={imageUrls && imageUrls.length > 0 ? imageUrls[0] : ''}
            alt={title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="right">
              ${price}.00
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton onClick={OnClickCart} disabled={!isAvailable}>
            <ShoppingCart />
          </IconButton>
          <IconButton
            onClick={onWishSelected}
            sx={{ color: "dashboard.secondary" }}
          >
            {wish ? <Favorite /> : <FavoriteBorderOutlined />}
          </IconButton>
          <IconButton sx={{ color: "dashboard.secondary" }}>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
          isSuccess={isSuccess}
          zIndex={notificationCount}
        />
      )}
    </Grid>
  );
};
