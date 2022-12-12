import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Refunded = () => {
  return (
    <Box sx={{ p: "5px", pt: "0px", width: "100%" }}>
      <Box>
        <Typography variant="h6" color={"dashboard.primary"}>
          Devoluciones hoy
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <Typography>Nombre</Typography>
          <Typography>Apellidos</Typography>
          <Typography color={"dashboard.primary"} fontSize={'10px'}>Camiseta</Typography>

        </Grid>
        <Grid item xs={6}>
          <Grid
            height={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",
              flexWrap: "wrap",
            }}
          >
            <Grid
              sx={{ width: "40%", height: "40%", backgroundColor: "white" }}
            ></Grid>
            <Grid
              sx={{ width: "40%", height: "40%", backgroundColor: "white" }}
            ></Grid>
            <Grid
              sx={{ width: "40%", height: "40%", backgroundColor: "white" }}
            ></Grid>
            <Grid
              sx={{ width: "40%", height: "40%", backgroundColor: "white" }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
