import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const GalleryImage = () => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2F3%20Mushrooms%20colores%20en%20hoja.jpeg?alt=media&token=e12365f1-b6ab-46f6-95f1-c4e9dcf9115b',
    title: 'Breakfast',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FAbeja%20roja.jpeg?alt=media&token=bb08e180-2713-45d9-a4bf-466c084e266d',
    title: 'Burger',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FAmong%20us.jpeg?alt=media&token=7e0bf339-e18b-4564-aab7-0648aeb04090',
    title: 'Camera',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FColibri%20Arbol.jpeg?alt=media&token=707d94ce-b70c-4c68-bddd-79083a71be86',
    title: 'Coffee',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FBallenita.jpeg?alt=media&token=8397fc8e-437d-4536-9d7f-a10a9ffd36a8',
    title: 'Hats',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FDino%20de%20cerca.jpeg?alt=media&token=6d109ccb-9ce6-4129-80c1-24ea49a41f0b',
    title: 'Honey',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FMariposa.jpeg?alt=media&token=7aa38b4b-07fe-4c40-9789-054714ef3ead',
    title: 'Basketball',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FMariposa.jpeg?alt=media&token=7aa38b4b-07fe-4c40-9789-054714ef3ead',
    title: 'Fern',
  },
];