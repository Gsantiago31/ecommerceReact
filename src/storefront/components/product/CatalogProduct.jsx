import { Favorite, FavoriteBorder, FavoriteBorderOutlined, FavoriteOutlined, Home, Share, ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveWishProduct, startDeleteWishProduct, startNewCartProduct, startNewWishProduct } from "../../../store/storefront";
 
export const CatalogProduct = ({ id, imageUrls = [], price, title }) => {
  
  const dispatch = useDispatch();

  const [wish, setWish] = useState(false)
  const { wishList, activeWishProduct } = useSelector( (state) => state.storefront)

 
  const onWishSelected = () => {
    
    dispatch(setActiveWishProduct( id ))
    const existeObjetoConId = wishList.some((objeto) => objeto.id === activeWishProduct);
   

    if (existeObjetoConId) {
      setWish(false)
      dispatch(startDeleteWishProduct(id))
    }else {
      setWish(true)
      dispatch(startNewWishProduct(id ,imageUrls = [], price, title))
    }
  }

  const OnClickCart = () => {
    dispatch(startNewCartProduct(imageUrls = [], price, title))
  }

  return (
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 300, m: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`${imageUrls[0]}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="right">
            ${price}.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={OnClickCart}>
        <ShoppingCart />
        </IconButton>
        <IconButton onClick={onWishSelected} sx={{color: 'dashboard.secondary'}}>
          {wish ? <Favorite /> : <FavoriteBorderOutlined/> }
        </IconButton>
        <IconButton sx={{color: 'dashboard.secondary'}}>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
  );
};
