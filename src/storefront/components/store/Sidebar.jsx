import { Divider, Grid, Slider, Typography } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import React from "react";
import { forwardRef } from "react";
import { useState } from "react";
import { Category } from "./Category";
import { RadioColors } from "./RadioColors";
import { Range } from "./Range";
import { Size } from "./Size";

export const Sidebar = forwardRef(
  (
    { onSizeChange, onCategoryChange, onColorChange, onRangeChange, category },
    ref
  ) => {
    return (
      <>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            height: { xs: "90vh", md: "85vh" },
            backgroundColor: "rgba(244, 182, 214, 0.8)",
            borderRadius: "20px",
            position: "sticky",
            top: {xs: 70, md:90},
            mb: '10%'
          }}
        >
          <Grid item xs={10}>
            <Typography align="center" sx={{ fontWeight: 'bold' }}>Category</Typography>
            <Divider sx={{ width: "100%", height: "1px", mb: "10px" }} />
            <Category onCategoryChange={onCategoryChange} />
          </Grid>
          <Grid item xs={10}>
            <Typography align="center" sx={{ fontWeight: 'bold' }}>Tamaño</Typography>
            <Divider sx={{ width: "100%", height: "1px", mb: "10px" }} />
            <Size onSizeChange={onSizeChange} />
          </Grid>
          <Grid item xs={10}>
            <Typography align="center" sx={{ fontWeight: 'bold' }}>Precio</Typography>
            <Divider sx={{ width: "100%", height: "1px", mb: "10px" }} />
            <Range onRangeChange={onRangeChange} />
          </Grid>
          <Grid item xs={12}>
            {category === "amigurumi" && (
              <>
                <Typography align="center" sx={{ fontWeight: 'bold' }}>Color</Typography>
                <Divider sx={{ width: "100%", height: "1px", mb: "10px" }} />
                <RadioColors onColorChange={onColorChange} />
              </>
            )}
          </Grid>
        </Grid>
      </>
    );
  }
);
