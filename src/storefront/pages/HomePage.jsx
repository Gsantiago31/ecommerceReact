import { Box, CardMedia, Grid, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CatalogProduct, Navbar } from "../components";
import { Footer } from "../components/footer";
import { GalleryImage } from "../components/gallery";
import { Header } from "../layout";

export const HomePage = () => {

  const { products } = useSelector( state => state.storefront)

  return (
    <Box>
      <Header
        title={"Crochet Pinturas y más"}
        subtitle={"Todo lo que más deseas"}
      />
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Nuestro Producto
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          alignItems: 'center',
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
      <Typography variant="h4" sx={{ mt: "50px", textAlign: "center" }}>
        Catálogo
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          mt: "50px",
          backgroundColor: "#f2f2f2",
        }}
      >
        {
          products.map(product =>(
            <CatalogProduct key={product.id} {...product}/>
          ))
        }
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          pt: "50px",
          pb: "30px",
          backgroundColor: "#f2f2f2",
        }}
      >
        <Grid item xs={10} md={10}>
          <Typography variant="h4" color={"#7B7D7D"} align={"center"}>
            Nuestros Servicios
          </Typography>
        </Grid>
        <Grid item xs={10} md={3}>
          <CardMedia
            component="img"
            height="auto"
            image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2Fimgservicios.png?alt=media&token=e376f2a8-4f9f-4f5e-87eb-95aabf3ecf3f"
            alt="green iguana"
            sx={{ mb: "10px" }}
          />
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Crochet
          </Typography>
          <Typography>
            ¡Animales, objetos y cualquier forma que te puedas imaginar en un
            peluche! ¡Hechos con Lana Chenil lo cual hace que tus peluches se
            vean aún más tiernos!
          </Typography>
        </Grid>
        <Grid item xs={10} md={3}>
          <CardMedia
            component="img"
            height="auto"
            image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2Fimgservicios.png?alt=media&token=e376f2a8-4f9f-4f5e-87eb-95aabf3ecf3f"
            alt="green iguana"
            sx={{ mb: "10px" }}
          />
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Pinturas
          </Typography>
          <Typography>
            ¿Quieres decorar tu sala, tu habitación o tal vez tu cocina? Tenemos
            cuadros que se adaptarán no solo a tu casa, si no que también a tus
            gustos.
          </Typography>
        </Grid>
        <Grid item xs={10} md={3}>
          <CardMedia
            component="img"
            height="auto"
            image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2Fimgservicios.png?alt=media&token=e376f2a8-4f9f-4f5e-87eb-95aabf3ecf3f"
            alt="green iguana"
            sx={{ mb: "10px" }}
          />
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Macramé
          </Typography>
          <Typography>
            ¿Buscas dónde colgar tus plantas para que se vean bonitas pero a la
            vez elegantes? ¡Tenemos lo que buscas! Colgantes de macetas hechos
            totalmente a mano.
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
};
