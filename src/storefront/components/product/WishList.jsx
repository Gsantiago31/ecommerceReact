import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'

export const WishList = ({ id ,imageUrls = [], price, title }) => {

    return (
    <Grid item xs={12}>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {price}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              
            </IconButton>
            <IconButton aria-label="play/pause">
            </IconButton>
            <IconButton aria-label="next">
             
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={imageUrls[0]}
          alt="Live from space album cover"
        />
      </Card>
      </Grid>
    );
  }