import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

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
          <CardMedia
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
          />
        </Grid>
        <Grid
          item
          xs={8}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              pb: "30px",
              justifyContent: { sx: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                background: "#4d0686",
                width: "30px",
                borderRadius: "30px",
                mr: "10px",
              }}
            >
              <Typography
                variant="h6"
                textAlign={"center"}
                color={"fontColor.main"}
              >
                1
              </Typography>
            </Box>
            <Typography variant="h6">Los Mejores Resultados</Typography>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { sx: "center", md: "center" },
            }}
          >
            <Box
              sx={{
                background: "#4d0686",
                width: "30px",
                borderRadius: "30px",
                mr: "10px",
              }}
            >
              <Typography
                variant="h6"
                textAlign={"center"}
                color={"fontColor.main"}
              >
                2
              </Typography>
            </Box>
            <Typography variant="h6">Los mejores productos</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
