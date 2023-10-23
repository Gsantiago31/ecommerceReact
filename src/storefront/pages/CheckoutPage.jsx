import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Footer } from "../components/footer";
import { Header } from "../layout";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  BillingForm,
  NavbarComponent,
  PaypalCheckoutButton,
} from "../components";
import { useNavigate } from "react-router-dom";

function calculatePercentage(number) {
  const percentage = 0.13; // el 13% en decimal
  const resultado = number * percentage;
  return parseFloat(resultado.toFixed(2));
}

export const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.storefront);

  const [shippingOption, setShippingOption] = useState("");
  const [shippingDetails, setShippingDetails] = useState({
    shippingMethod: "",
    additionalCost: 0,
  });

  const navigate = useNavigate();

  const handlePaypalSuccess = () => {
    navigate("/home");
  };

  const sumaPrecios = cart
    .map((producto) => {
      const multiplicacion = producto.price * producto.userQuantity;
      // console.log(
      //   `Resultado de multiplicar ${producto.price} por ${producto.userQuantity}: ${multiplicacion}`
      // );
      return multiplicacion;
    })
    .reduce((a, b) => {
      const suma = a + b;
      // console.log(`Resultado de sumar ${a} y ${b}: ${suma}`);
      return suma;
    }, 0);

  const number = sumaPrecios;
  const percentage = calculatePercentage(number);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  
    const combinedData = { ...data, productos: [...cart] };

    const productToFireStore = { ...combinedData };

    const id = Math.random().toString(36).substr(2, 9);

    const docRef = doc(
      FirebaseDB,
      `eu1fjYLeV8cxmKcYfLDBAHIB97y2/store/orders/${id}`
    );
    await setDoc(docRef, productToFireStore, { merge: true });
    console.log("mensaje enviado");
  };

  const [nationalShippingWeight, setNationalShippingWeight] = useState(0);
  const [internationalShippingWeight, setInternationalShippingWeight] =
    useState(0);

  const calculateShippingCost = (shippingOption, weight) => {
    // Define los costos adicionales para cada opción de envío
    const shippingCosts = {
      national: 7.6, // Costo adicional de envío nacional
      international: 31, // Costo adicional de envío internacional
    };

    // Obtén el costo adicional según la opción de envío seleccionada
    let additionalCost = shippingCosts[shippingOption] || 0;

    // Si es envío nacional o internacional, y hay un peso adicional, calcula el costo adicional según el peso
    if (
      (shippingOption === "national" || shippingOption === "international") &&
      weight
    ) {
      additionalCost += weight * (shippingOption === "international" ? 4 : 2);
    }

    return additionalCost;
  };

  const handleShippingOptionChange = (event) => {
    const option = event.target.value;
    const additionalCost = calculateShippingCost(
      option,
      option === "national"
        ? nationalShippingWeight
        : internationalShippingWeight
    );

    setShippingOption(option);
    setShippingDetails({
      shippingMethod: option,
      additionalCost: additionalCost,
    });
  };
  const shippingCost = calculateShippingCost(shippingOption, 1);
  const totalPrice = Number((sumaPrecios + percentage + shippingDetails.additionalCost).toFixed(2));

  console.log(parseFloat(totalPrice))


  const product = {
    description: "Paypal checkout course",
    price: parseFloat(totalPrice),
  };
  

  return (
    <Box>
      <NavbarComponent />
      <Header title={"Checkout"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
          <Grid container spacing={2} justifyContent="center">
            <BillingForm
              control={control}
              errors={errors}
              FormControl={FormControl}
            />
            <Grid item xs={10} md={4}>
              <Card>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6" align="center">
                      Your order
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent
                      sx={{
                        m: "10px",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid gray",
                      }}
                    >
                      <Typography
                        variant="h6"
                        align="left"
                        sx={{ width: "50%" }}
                      >
                        Product
                      </Typography>
                      <Typography
                        variant="h6"
                        align="right"
                        sx={{ width: "50%" }}
                      >
                        Subtotal
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent
                      sx={{ m: "10px", borderBottom: "1px solid gray" }}
                    >
                      {cart.map((product) => (
                        <Grid
                          key={product.id}
                          sx={{ display: "flex", flexDirection: "row" }}
                        >
                          <Typography
                            variant="subtitle2"
                            align="left"
                            sx={{ width: "50%" }}
                          >
                            {product.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            align="right"
                            sx={{ width: "50%" }}
                          >
                            $ {product.price}
                          </Typography>
                        </Grid>
                      ))}
                    </CardContent>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent
                      sx={{
                        m: "10px",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid gray",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        align="left"
                        sx={{ width: "50%" }}
                      >
                        Subtotal
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="right"
                        sx={{ width: "50%" }}
                      >
                        $ {sumaPrecios}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent
                      sx={{
                        m: "10px",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid gray",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        align="left"
                        sx={{ width: "50%" }}
                      >
                        I.V.A
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="right"
                        sx={{ width: "50%" }}
                      >
                        {" "}
                        $ {percentage}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent
                      sx={{ m: "10px", borderBottom: "1px solid gray" }}
                    >
                      {/* Opciones de envío */}
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Shipping Option:
                        </FormLabel>
                        <RadioGroup
                          aria-label="shipping-option"
                          name="shipping-option"
                          value={shippingOption}
                          onChange={handleShippingOptionChange}
                        >
                          <FormControlLabel
                            value="national"
                            control={<Radio />}
                            label="National Shipping"
                          />
                          <FormControlLabel
                            value="international"
                            control={<Radio />}
                            label="International Shipping"
                          />
                          <FormControlLabel
                            value="storePickup"
                            control={<Radio />}
                            label="Store Pickup"
                          />
                        </RadioGroup>
                      </FormControl>

                      {/* Campo adicional para peso en envío nacional */}
                      <Typography variant="body1">
    Additional Cost: ${shippingCost.toFixed(2)}
  </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent
                      sx={{
                        m: "10px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        align="left"
                        sx={{ width: "50%" }}
                      >
                        Total
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="right"
                        sx={{ width: "50%" }}
                      >
                        $ {totalPrice}
                      </Typography>
                    </CardContent>

                    <Grid item xs={12}>
                      <PaypalCheckoutButton
                        product={product}
                        onClick={handleSubmit(onSubmit)}
                        onPaypalSuccess={handlePaypalSuccess}
                      />
                      <button onClick={handleSubmit(onSubmit)}>try</button>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </form>
      <Footer />
    </Box>
  );
};
