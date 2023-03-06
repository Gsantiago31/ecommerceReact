import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Navbar } from "../../components";
import background from "../../../assets/img/background.png" 

import "./header.scss";

export const Header = ({title, subtitle}) => {
  return (
    <Grid container sx={{ backgroundImage: `url(${background})` , height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Navbar />
      <Grid item className="animate__animated animate__rubberBand" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'fontColor.main'}}>
      <Typography variant="h3" sx={{textAlign: 'center'}}>{title}</Typography>
      <Typography variant="h5" sx={{textAlign: 'center'}}>{subtitle}</Typography>
      </Grid>
      <Box className="wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.99 C150.08,150.00 352.60,-49.99 500.30,49.99 L500.30,150.00 L0.00,150.00 Z"></path>
        </svg>
      </Box>
    </Grid>
  );
};
