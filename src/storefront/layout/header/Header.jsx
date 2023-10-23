import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import background from "../../../assets/img/background.png" 

import "./header.scss";

export const Header = ({title, subtitle}) => {
  return (
    <Grid container sx={{ backgroundImage: `url(${background})` , height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
     
      <Grid item className="animate__animated animate__rubberBand" sx={{height:'70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'fontColor.secondary'}}>
      <Typography variant="h3" sx={{textAlign: 'center', mt:'5%'}}>{title}</Typography>
      <Typography variant="h5" sx={{textAlign: 'center'}}>{subtitle}</Typography>
      </Grid>
      <Box className="wave" sx={{height: '30%'}}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.99 C150.08,150.00 352.60,-49.99 500.30,49.99 L500.30,150.00 L0.00,150.00 Z"></path>
        </svg>
      </Box>
    </Grid>
  );
};
