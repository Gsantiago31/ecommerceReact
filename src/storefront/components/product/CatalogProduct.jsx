import { Favorite, FavoriteBorder, FavoriteBorderOutlined, FavoriteOutlined, Home, Share } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

export const CatalogProduct = ({ imageUrls = [], price, title }) => {
  
  const [wish, setWish] = useState(false)

  const onWishSelected = () => {
    setWish(current => !current)
  }

  return (
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
        <Button size="small" color="primary" sx={{border: '1px solid', borderColor: 'dashboard.secondary', borderRadius: '20px','&:hover': {backgroundColor: 'dashboard.secondary'} }}>
          <Typography variant="button">Añadir al carrito</Typography>
        </Button>
        <IconButton onClick={onWishSelected} sx={{color: 'dashboard.secondary'}}>
          {wish ? <Favorite /> : <FavoriteBorderOutlined/> }
        </IconButton>
        <IconButton sx={{color: 'dashboard.secondary'}}>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};
