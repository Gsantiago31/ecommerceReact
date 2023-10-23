import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import {useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CatalogProduct, NavbarComponent, OurProduct } from "../components";
import { Footer } from "../components/footer";
import { Header } from "../layout";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const HomePage = () => {
  const { products } = useSelector((state) => state.storefront);

  console.log(products)

  // const productsShow = [...products];
  // const mappedItems = productsShow.sort(() => Math.random() - 0.5).slice(0, 4);


  return (
    <Box>
      <NavbarComponent/>
      <Header
        title={"Crochet Pinturas y más"}
        subtitle={"Todo lo que más deseas"}
      />

      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Bienvenido al mundo de ViVTwins
      </Typography>
        <OurProduct />

      <Divider sx={{ width: "20%", margin: "auto", p: "10px" }} />

      <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
      <Typography variant="h4" sx={{ mt: "25px", textAlign: "center" }}>
        ¿Has visto todos los patrones que tenemos para tì?
      </Typography>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "50px",
          backgroundColor: "#f2f2f2",
        }}
      >
        <Grid
          container
          justifyContent={'center'} alignItems={'center'}
          sx={{
            mt: "50px",
            backgroundColor: "#f2f2f2",
            position: 'relative'
          }}
        >
          {products.slice(0,20).map((product) => (
            <CatalogProduct key={product.id} {...product} size={3}  />
          ))}
        </Grid>
        <NavLink
          to={`/products`}
          style={() => ({
            textDecoration: "none",
          })}
        >
          <Button
            color="primary"
            sx={{
              width: "150px",
              border: "1px solid",
              borderColor: "dashboard.secondary",
              borderRadius: "20px",
              mb: "50px",
              "&:hover": { backgroundColor: "dashboard.secondary" },
            }}
          >
            <Typography variant="button">Ver más</Typography>
          </Button>
        </NavLink>
      </Grid>
      </AnimationOnScroll>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          pt: "50px",
          pb: "50px",
          backgroundColor: "#f2f2f2",
        }}
      >
        {/* <Grid item xs={10} md={10}>
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
        </Grid> */}
      </Grid>
      <Footer />
    </Box>
  );
};
