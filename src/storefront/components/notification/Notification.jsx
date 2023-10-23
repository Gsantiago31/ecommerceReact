import React, { useEffect } from 'react';
import './styles.css'
import { Grid, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

export const Notification = ({ message, onClose, isSuccess, zIndex }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Grid container className={`notification ${isSuccess ? 'success' : 'error'}`} sx={{width: {xs: '60%', sm: '30%', md: '25%'}}} style={{ zIndex }}>
      <Grid item xs={10}>
        <span className="message">{message}</span>
      </Grid>
      <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <IconButton className="close" onClick={onClose}>
        <Close/>
      </IconButton>
      </Grid>
      
    </Grid>
  );
};