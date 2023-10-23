
import { Box, Grid,Typography} from "@mui/material";
import { Footer } from "../components/footer";
import { Header } from "../layout";
import { ContactForm,NavbarComponent } from "../components";
export const ContactPage = () => {
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pr: { xs: "50px", md: "100px" },
          pl: { xs: "50px", md: "100px" },
          mb: "50px",
        }}
      >
        <Typography variant="h3" color={"#7B7D7D"} mb={'50px'}>
          Contáctanos
        </Typography>
        <Typography textAlign={"center"} variant="h5">
          ¿No encuentras lo que buscas? ¿Tienes dudas o sugerencias?
        </Typography>
        <Typography variant="h6" sx={{ mb: "20px", mt: "20px" }}>
          Contáctanos y te responderemos lo más pronto posible
        </Typography>
        <Grid container sx={{ justifyContent: 'space-evenly', mt: '50px' }}>
          <ContactForm/>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};
