import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Place,
  WhatsApp,
} from "@mui/icons-material";
import {
  Divider,
  Grid,
  IconButton,
  Typography,
  Link,
  CardMedia,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        background: "#414141",
        justifyContent: "space-between",
        alignItems: 'center',
        pt: "50px",
        mt: '5%'
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          display: { sx: "none", md: "flex" },
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "space-evenly",
          color: "fontColor.main",
        }}
      >
        <Grid
          sx={{
            display: { xs: "flex", md: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RouterLink to={"/home"}>
            <CardMedia
              component="img"
              image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FLogo-ViV-twins.png?alt=media&token=8917e75a-3554-4ac3-a9e6-6a085ca9f15b"
              alt="Gsdesign"
              sx={{ height: "100%" }}
            />
          </RouterLink>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        md={4}
        sx={{
          display: { sx: "none", md: "flex" },
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "space-evenly",
          color: "fontColor.main",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Phone sx={{ mr: "5px" }} />{" "}
          <Link
            href="tel:+50672206552"
            target="_blank"
            underline="none"
            color={"white"}
            sx={{ "&:hover": { color: "secondary.main" } }}
          >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              (+506) 7220-6552
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Email sx={{ mr: "5px" }} />
          <Link
            href="mailto:info@vivtwins.com"
            target="_blank"
            underline="none"
            color={"white"}
            sx={{ "&:hover": { color: "secondary.main" } }}
          >
            <Typography>info@vivtwins.com</Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Place sx={{ mr: "5px" }} />
          <Typography>Guanacaste, Costa Rica</Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "space-evenly",
          color: "fontColor.main",
        }}
      >
        <RouterLink
          to="/products"
          style={{ color: "white", textDecoration: "none" }}
        >
          Productos
        </RouterLink>
        <RouterLink
          to="/contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contacto
        </RouterLink>
        <RouterLink
          to="/cart"
          style={{ color: "white", textDecoration: "none" }}
        >
          Carrito
        </RouterLink>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: { sx: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          color: "fontColor.main",
        }}
      >
        <IconButton
          style={{
            backgroundColor: "#C13584",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href="https://www.instagram.com/viv_twins/"
            target="_blank"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Instagram style={{ color: "white" }} />
          </Link>
        </IconButton>
        <IconButton
          style={{
            backgroundColor: "#3B5998",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href="https://www.facebook.com/vivtwins"
            target="_blank"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Facebook style={{ color: "white" }}></Facebook>
          </Link>
        </IconButton>
      </Grid>
      <Grid item xs={10}>
        <Divider sx={{ background: "primary.main", height: "3px" }} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "0.5%",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href="https://www.gsdesigncr.com"
          target="_blank"
          underline="none"
        >
          <Typography
            variant="body2"
            align="center"
            sx={{ textAlign: "center", color: "secondary.main" }}
          >
            © 2023 Gsdesign
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
