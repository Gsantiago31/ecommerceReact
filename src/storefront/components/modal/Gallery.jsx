import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const Gallery = ({ id, imageUrls, price, title, size }) => {
  const [mainImage, setMainImage] = useState(imageUrls[0]);

  const images = Object.values(imageUrls).map((imageUrl, index) => {
    return {
      id: index + 1,
      url: imageUrl,
    };
  });

  const handleImageClick = (image) => {
    setMainImage(image.url);
  };

  return (
    <Grid container sx={{ height: 'auto', display: {xs: 'block', md: 'flex'}}}>
      
      <Grid item xs={12} sm={8} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '20px', border: '1px solid #e0e0e0', boxShadow: '0px 2px 5px #888888'}}>
          <img src={mainImage} alt="main" className="main-image" style={{width: '90%'}}/>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', border: '1px solid #e0e0e0', boxShadow: '0px 2px 5px #888888'}}>
        <ImageList sx={{ width: '90%', height: '90%', display: 'flex', flexDirection: {xs: 'row', md:'column'}}} >
          {images.map((image) => (
            <ImageListItem key={image.id} onClick={() => handleImageClick(image)} sx={{ width: {xs: '100px', md: '150px'}, height: '200px' }}>
              <img src={image.url} alt="thumbnail" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>

  );
};
