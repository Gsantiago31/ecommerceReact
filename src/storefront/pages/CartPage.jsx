import { Delete, ShoppingCartCheckout } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { CatalogProductCart } from "../components";
import { Footer } from "../components/footer";
import { Header } from "../layout";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.storefront);

  const sumaPrecios = cart.map(producto => producto.price).reduce((a, b) => a + b, 0);

  console.log(`La suma total es ${sumaPrecios}`)

  return (
    <Box>
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
        <Grid item xs={11} sx={{m: 'auto'}}>
    <Card sx={{ width: '100%', height: '50px', display: 'flex', flexDirection: 'row' }}>
      <Grid container >
        <Grid item xs={1} sx={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        </Grid>
        <Grid item xs={4} sx={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
        <CardContent>
        <Typography variant="h6" color="text.primary" align="right">
            Product
          </Typography>
        </CardContent>
        </Grid>
        <Grid item xs={2} sx={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CardContent>
        <Typography variant="h6" color="text.primary" align="right">
            Price
          </Typography>
        </CardContent>
        </Grid>
        <Grid item xs={2} sx={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CardContent>
        <Typography variant="h6" color="text.primary" align="right">
            Quantity
          </Typography>
        </CardContent>
        </Grid>
        <Grid item xs={2} sx={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CardContent>
        <Typography variant="h6" color="text.primary" align="right">
            Subtotal
          </Typography>
        </CardContent>
        </Grid>
      </Grid>
      <CardActions> 
        <IconButton>
        <Delete />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
        {cart.map((product) => (
          <CatalogProductCart key={product.id} {...product} />
        ))}
        <Grid item xs={11} mt={2}>
          <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            
            <IconButton sx={{borderRadius: '10px'}} >
              <Typography color="secondary" variant="h6" mr={2}>Total:</Typography>
              <Typography variant="p" >$ {sumaPrecios}.00 </Typography>
            </IconButton>
            <IconButton color="secondary" sx={{border: '1px solid #000', borderRadius: '10px'}}>
              <Typography variant="h6" mr={2}>Checkout</Typography>
              <ShoppingCartCheckout />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};
