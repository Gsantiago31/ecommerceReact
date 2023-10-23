import React, { useState } from "react";
import { Radio, Tooltip } from "@mui/material";
import {
  blue,
  brown,
  green,
  grey,
  pink,
  purple,
  red,
  teal,
  yellow,
} from "@mui/material/colors";

const radioColors = [
  {
    id: "a",
    value: red,
    number: "500",
    title: "Rojo"
  },
  {
    id: "b",
    value: red,
    number: "900",
    title: "Vino tinto"
  },
  {
    id: "c",
    value: pink,
    number: "200",
    title: "Rosa pálido"
  },
  {
    id: "d",
    value: pink,
    number: "500",
    title: "Rosa"
  },
  {
    id: "e",
    value: purple,
    number: "500",
    title: "Morado"
  },
  {
    id: "f",
    value: blue,
    number: "900",
    title: "Azul"
  },
  {
    id: "g",
    value: teal,
    number: "A200",
    title: "Menta"
  },
  {
    id: "h",
    value: green,
    number: "500",
    title: "Verde"
  },
  {
    id: "i",
    value: yellow,
    number: "300",
    title: "Beige"
  },
  {
    id: "j",
    value: yellow,
    number: 500,
    title: "Amarillo"
  },
  {
    id: "k",
    value: brown,
    number: "500",
    title: "Café"
  },
  {
    id: "l",
    value: grey,
    number: 400,
    title: "Gris claro"
  },
  {
    id: "m",
    value: grey,
    number: 500,
    title: "Gris"
  },
  {
    id: "n",
    value: grey,
    number: 800,
    title: "Gris Oscuro"
  },
  {
    id: "o",
    value: grey,
    number: "900",
    title: "Negro"
  },
  {
    id: "p",
    value: grey,
    number: "A200",
    title: "Blanco"
  },
];

export const RadioColors = ({onColorChange}) => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleButtonClick = (event) => {
    if (selectedValue === event.target.value) {
      // Si el botón ya estaba seleccionado, establecemos el valor a null
      setSelectedValue(null);
      onColorChange(null)
    } else {
      // Si el botón no estaba seleccionado, establecemos el nuevo valor
      setSelectedValue(event.target.value);
      onColorChange(event.target.value)
    }
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleButtonClick,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      {radioColors.map((color) => (
        <Tooltip title={color.title} key={color.id}>
        <Radio
          onClick={handleButtonClick}
          {...controlProps(color.id)}
          sx={{
            color: color.value[color.number],
            "&.Mui-checked": {
              color: color.value[color.number],
            },
          }}
          
        />
        </Tooltip>
      ))}
    </>
  );
};
