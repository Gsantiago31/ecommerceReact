import { Slider } from '@mui/material';
import React from 'react'
import { useState } from 'react';


function valuetext(value) {
    return `$ ${value}`;
  }

export const Range = ({onRangeChange}) => {

    const [value, setValue] = useState([0, 100]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      onRangeChange(newValue); // Ejecuta el callback con los nuevos valores
    };

  return (
    <>
    
    <Slider
            getAriaLabel={() => "Price"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
    
    </>
  )
}
