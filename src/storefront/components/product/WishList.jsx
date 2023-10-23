import { RemoveCircle, ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { startDeleteWishProduct } from "../../../store/storefront";

export const WishList = ({ id, imageUrls = [], price, title }) => {
  const dispatch = useDispatch();

  const handleRemoveWishProduct = () => {
    dispatch(startDeleteWishProduct(id));
  };

  return (
    <Grid item xs={12}>
      <Card sx={{ display: "flex", width: '400px' }}>
        <Grid container sx={{ display: "flex", flexDirection: "row" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" align="center" sx={{width: '100%', height: '100%'}}>
              {title}
            </Typography>
          </Grid>

          <Grid
            item
            xs={10}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={imageUrls[0]}
              alt="Live from space album cover"
            />
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Tooltip title="Eliminar de la lista de deseos">
              <IconButton onClick={handleRemoveWishProduct}><RemoveCircle  sx={{ color: "red" }}/></IconButton>
              
            </Tooltip>
            <Tooltip title="Agregar al carrito">
              <IconButton>
                 <ShoppingCart />
              </IconButton>
             
            </Tooltip>
            
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
