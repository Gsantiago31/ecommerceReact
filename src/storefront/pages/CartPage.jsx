import { Delete, ShoppingCartCheckout } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CatalogProductCart, NavbarComponent } from "../components";
import { Footer } from "../components/footer";
import { Header } from "../layout";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.storefront);

  const sumaPrecios = cart
    .map((producto) => {
      const multiplicacion = producto.price * producto.userQuantity;
      console.log(
        `Resultado de multiplicar ${producto.price} por ${producto.userQuantity}: ${multiplicacion}`
      );
      return multiplicacion;
    })
    .reduce((a, b) => {
      const suma = a + b;
      console.log(`Resultado de sumar ${a} y ${b}: ${suma}`);
      return suma;
    }, 0);

  return (
    <Box>
      <NavbarComponent/>
      <Header
        title={"Crochet Pinturas y más"}
        subtitle={"Todo lo que más deseas"}
      />
      <Grid
        container
        sx={{
          mt: "50px",
          mb: "50px",
        }}
      >
        


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
              flexDirection: "center",
              alignItems: "center",
              justifyContent: 'center'
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              Producto
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
                Precio
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
              <Typography variant="body2" color="text.secondary" align="right">
                Cantidad
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
              <Typography variant="body2" color="text.secondary" align="right">
                Subtotal
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1}>
            
          </Grid>
        </Grid>
      </Card>
    </Grid>
        {cart.map((product) => (
          <CatalogProductCart key={product.id} {...product} />
        ))}
        <Grid item xs={11} mt={2}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <IconButton sx={{ borderRadius: "10px" }}>
              <Typography color="secondary" variant="h6" mr={2}>
                Total:
              </Typography>
              <Typography variant="p">$ {sumaPrecios}.00 </Typography>
            </IconButton>
            <IconButton
              color="secondary"
              sx={{ border: "1px solid #000", borderRadius: "10px" }}
            >
              <NavLink to={"/checkout"}>
                <Typography variant="h6" mr={2}>
                  Checkout
                </Typography>
                <ShoppingCartCheckout />
              </NavLink>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};
