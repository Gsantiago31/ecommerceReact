import { Delete, Favorite, FavoriteBorder, FavoriteBorderOutlined, FavoriteOutlined, Home, Share, ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Icon, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDeleteCartProduct } from "../../../store/storefront";
 
export const CatalogProductCart = ({ id, imageUrls = [], price, title }) => {
  
  const dispatch = useDispatch();

  const [wish, setWish] = useState(false)
  const { wishList, activeWishProduct } = useSelector( (state) => state.storefront)

  const OnClickTrash = () => {
    dispatch(startDeleteCartProduct(id, imageUrls = [], price, title))
  }

  return (
    <Grid item xs={11} sx={{m: 'auto'}}>
    <Card sx={{ width: '100%', mt: '20px', display: 'flex', flexDirection: 'row' }}>
      <Grid container>
        <Grid item xs={1}>
        <CardMedia
          component="img"
          height="50"
          image={`${imageUrls[0]}`}
          alt="green iguana"
          sx={{ width: '100px'}}
        />
        </Grid>
        <Grid item xs={4}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
            {title}
          </Typography>
        </CardContent>
        </Grid>
        <Grid item xs={2} sx={{borderRight: '1px solid gray', borderLeft: '1px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CardContent>
        <Typography variant="body2" color="text.secondary" align="right">
            ${price}.00
          </Typography>
        </CardContent>
        </Grid>
        <Grid item xs={2} sx={{borderRight: '1px solid gray', borderLeft: '1px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CardContent>
        <Typography variant="body2" color="text.secondary" align="right">
            1
          </Typography>
        </CardContent>
        </Grid>
        <Grid item xs={2} sx={{borderRight: '1px solid gray', borderLeft: '1px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CardContent>
        <Typography variant="body2" color="text.secondary" align="right">
            $ {price * 2}.00
          </Typography>
        </CardContent>
        </Grid>
      </Grid>
      <CardActions>
        <IconButton>
        <Delete onClick={OnClickTrash} />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
  );
};
