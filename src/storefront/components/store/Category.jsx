import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export const Category = ({onCategoryChange}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (value, index) => {
    
    if (selectedValue === value) {
      // Si el botón ya estaba seleccionado, establecemos el valor a null
      setSelectedValue(null);
      onCategoryChange(null);
    } else {
      // Si el botón no estaba seleccionado, establecemos el nuevo valor
      setSelectedValue(value);
      onCategoryChange(value);
    }
    setSelectedButton(index);
  };

  return (
    <Grid >
      <ButtonGroup sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          size="small"
          onClick={() => handleButtonClick("pintura")}
          variant={selectedValue === "pintura" ? "contained" : "outlined"}
          color="primary"
          sx={{width: {xs: '100%', md: '90%'}, mb: {xs: '3%', md: '0'}, mr: {xs: '0', md: '3%'}}}
        >
          Pinturas
        </Button>
        <Button
        size="small"
          onClick={() => handleButtonClick("amigurumi")}
          variant={selectedValue === "amigurumi" ? "contained" : "outlined"}
          color="primary"
          sx={{width: {xs: '100%', md: '90%'}, mb: {xs: '3%', md: '0'},mr: {xs: '0', md: '3%'}}}
        >
          Amigurumi
        </Button>
        {/* <Button
        size="small"
          onClick={() => handleButtonClick("macrame")}
          variant={selectedValue === "macrame" ? "contained" : "outlined"}
          color="primary"
          sx={{width: {xs: '100%', md: '90%'}, mb: {xs: '3%', md: '0'}}}
        >
          Macramé
        </Button> */}
      </ButtonGroup>
    </Grid>
  );
}
