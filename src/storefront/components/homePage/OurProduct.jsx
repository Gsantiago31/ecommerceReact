import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { CarouselImage } from "../gallery";

export const OurProduct = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={8}
          md={5}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            mt: "20px",
          }}
        >
          {/* <CardMedia
            component="img"
            image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2Fimgservicios.png?alt=media&token=e376f2a8-4f9f-4f5e-87eb-95aabf3ecf3f"
            alt="green iguana"
            sx={{ mb: "10px", width: "40%" }}
          />
          <CardMedia
            component="img"
            height="200px"
            image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2Fimgservicios.png?alt=media&token=e376f2a8-4f9f-4f5e-87eb-95aabf3ecf3f"
            alt="green iguana"
            sx={{ mb: "10px", width: "40%" }}
          />
          <CardMedia
            component="img"
            height="200px"
            image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2Fimgservicios.png?alt=media&token=e376f2a8-4f9f-4f5e-87eb-95aabf3ecf3f"
            alt="green iguana"
            sx={{ mb: "10px" }}
          /> */}

          <CarouselImage/>
        </Grid>
        
      </Grid>
    </>
  );
};
