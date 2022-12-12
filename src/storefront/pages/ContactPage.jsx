import { ConnectWithoutContact, Email, Instagram, Phone, Send, WhatsApp } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography, Link, Icon } from "@mui/material";
import { Footer } from "../components/footer";
import { Header } from "../layout";
export const ContactPage = () => {
  return (
    <Box>
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
          <Grid item xs={10} md={3} mb={'20px'}>
            <Icon sx={{ width: '100%'}}><Phone /></Icon>
            <Typography textAlign={"center"}>Celular</Typography>
            <Grid container>
              <Grid item xs={12}>
                <Link
                  href="https://api.whatsapp.com/send?phone=50672425263&text=Me%20interesa%20saber%20m%C3%A1s%20de"
                  target={"blank"}
                  sx={{ display: "flex", gap: "10px", justifyContent: 'center', mt: '20px' }}
                >
                  <Typography>(+506) 7242-5263</Typography>
                  <WhatsApp />
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link
                  href="https://api.whatsapp.com/send?phone=50672206552&text=Me%20interesa%20saber%20m%C3%A1s%20de"
                  target={"blank"}
                  sx={{ display: "flex", gap: "10px", justifyContent: 'center', mt: '20px' }}
                >
                  <Typography>(+506) 7220-6552</Typography>
                  <WhatsApp />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} md={3}>
            <Icon sx={{ width: '100%'}}><Email /></Icon>
            <Typography textAlign={"center"}>Email</Typography>
            <Grid container>
              <Grid item xs={12}>
                <Link
                  href="mailto:vivtwins2117@gmail.com?subject=Me%20interesa%20saber%20m%C3%A1s&body=Hola,%20estuve%20viendo%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa"
                  target={"blank"}
                  sx={{ display: "flex", gap: "10px", justifyContent: 'center', mt: '40px' }}
                >
                  <Typography>vivtwins2117@gmail</Typography>
                  <Send />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} md={3}>
            <Icon sx={{ width: '100%'}}><ConnectWithoutContact /></Icon>
            <Typography textAlign={"center"}>Redes sociales</Typography>
            <Grid container>
              <Grid item xs={12}>
                <Link
                  href="https://www.instagram.com/viv_twins/"
                  target={"blank"}
                  sx={{ display: "flex", gap: "10px", justifyContent: 'center', mt: '40px'}}
                >
                  <Typography>Instagram</Typography>
                  <Instagram />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};
