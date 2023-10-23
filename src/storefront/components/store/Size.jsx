import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export const Size = ({onSizeChange}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleButtonClick = (value) => {
    if (selectedValue === value) {
      // Si el botón ya estaba seleccionado, establecemos el valor a null
      setSelectedValue(null);
      onSizeChange(null)
    } else {
      // Si el botón no estaba seleccionado, establecemos el nuevo valor
      setSelectedValue(value);
      onSizeChange(value)
    }
  };

  return (
    <Grid>
      <ButtonGroup sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center'}}>
        <Button
        size="small"
          onClick={() => handleButtonClick("pequeño")}
          variant={selectedValue === "pequeño" ? "contained" : "outlined"}
          color="primary"
          sx={{width: {xs: '100%', md: '90%'}, mb: {xs: '3%', md: '0'}, mr: {xs: '0', md: '3%'}}}
        >
          Pequeño
        </Button>
        <Button
        size="small"
          onClick={() => handleButtonClick("mediano")}
          variant={selectedValue === "mediano" ? "contained" : "outlined"}
          color="primary"
          sx={{width: {xs: '100%', md: '90%'}, mb: {xs: '3%', md: '0'},mr: {xs: '0', md: '3%'}}}
        >
          Mediano
        </Button>
        <Button
        size="small"
          onClick={() => handleButtonClick("grande")}
          variant={selectedValue === "grande" ? "contained" : "outlined"}
          color="primary"
          sx={{width: {xs: '100%', md: '90%'}, mb: {xs: '3%', md: '0'}}}
        >
          Grande
        </Button>
      </ButtonGroup>
    </Grid>
  );
}





