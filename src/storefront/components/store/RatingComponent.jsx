import React, { useState } from 'react';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateProductRating } from '../../../store/storefront';

export const RatingComponent = ( id ) => {
  const [rating, setNewRating] = useState(0); // Inicializa el estado con un valor de 0

  const dispatch = useDispatch();

  const handleRatingChange = (event, newValue) => {
    setNewRating(newValue); // Actualiza el estado con el nuevo valor de rating seleccionado

    dispatch(updateProductRating({id, newRating: newValue }))
  };
  return (
    <div>
      <Rating value={rating} onChange={handleRatingChange} /> {/* Usa el estado "value" para el valor actual del rating */}
      <p>El rating seleccionado es: {rating}</p> {/* Muestra el rating seleccionado en la pantalla */}
    </div>
  );
};
