import {
  Add,
  Delete,
  Remove,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteCartProduct,
  updateCartProductQuantity,
} from "../../../store/storefront";

export const CatalogProductCart = ({
  id,
  imageUrls,
  price,
  title,
  userQuantity,
  weight
}) => {
  const dispatch = useDispatch();
  const [newQuantity, setNewQuantity] = useState(1);
console.log(weight)
  const { cart } = useSelector((state) => state.storefront);
  console.log(cart);

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= 10) {
      setNewQuantity(value);
      dispatch(updateCartProductQuantity({ id, newQuantity: value }));
    }
  };

  const handleQuantityIncrement = () => {
    if (newQuantity < 10) {
      setNewQuantity(newQuantity + 1);
      dispatch(updateCartProductQuantity({ id, newQuantity: newQuantity + 1 }));
    }
  };

  const handleQuantityDecrement = () => {
    if (newQuantity > 1) {
      setNewQuantity(newQuantity - 1);
      dispatch(updateCartProductQuantity({ id, newQuantity: newQuantity - 1 }));
    }
  };

  const OnClickTrash = () => {
    dispatch(startDeleteCartProduct(id, (imageUrls = []), price, title));
  };

  const subTotalPrice = price * userQuantity;

  return (
    <Grid item xs={11} sx={{ m: "auto" }}>
      <Card
        sx={{
          width: "100%",
          mt: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: {xs: 'column', md: 'row'},
              alignItems: "center",
              justifyContent: 'flex-start'
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={`${imageUrls[0]}`}
              alt="green iguana"
              sx={{ width: "100px", mr: '5%' }}
            />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            md={2}
            sx={{
              borderRight: "1px solid gray",
              borderLeft: "1px solid gray",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Typography variant="body2" color="text.secondary" align="right">
                ${price}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              borderRight: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent={'center'} sx={{flexDirection: {xs: 'column', md: 'row'}}}>
                <IconButton
                  size="small"
                  onClick={handleQuantityDecrement}
                  sx={{ mr: {xs: 0, md: 1} }}
                >
                  <Remove />
                </IconButton>
                <Box display="flex" alignItems="center">
                  <TextField
                    type="number"
                    value={newQuantity}
                    onChange={handleQuantityChange}
                    inputProps={{ min: 1, max: 10 }}
                    style={{ width: 50 }}
                    sx={{ display: "none" }}
                  />
                  <Typography variant="body1" component="span" sx={{ mx: 1 }}>
                    {newQuantity}
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={handleQuantityIncrement}
                  sx={{ mr: {xs: 0, md: 1} }}
                >
                  <Add />
                </IconButton>
              </Box>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              borderRight: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Typography variant="body2" color="text.secondary" align="right">
                $ {subTotalPrice}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1}>
            <CardActions>
              <IconButton onClick={OnClickTrash}>
                <Delete />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
