import { PointOfSale } from '@mui/icons-material'
import { CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Sale = () => {
  return (
    <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
      <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Box sx={{width: '50%'}}>
      <Typography>Nombre Apellidos</Typography>
      <Typography>Dirección</Typography>
      </Box>
      <Box sx={{width: '50%'}}>
        <Typography align='center' color={"dashboard.primary"}>$25</Typography>
      </Box>
      </Grid>
      <CardMedia
        component="img"
        height="200"
        image='https://firebasestorage.googleapis.com/v0/b/viv-twins.appspot.com/o/2%20Medusas.jpeg?alt=media&token=0d56cc65-8f33-4c99-8665-46c56e745478'
        alt=""
      />
      <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mt: '10px'}} color={"dashboard.primary"}><PointOfSale /><Typography color={"dashboard.terciary"}>Product List</Typography></Grid>
      <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Box sx={{width: '50%'}}>
      <Typography>Medusas</Typography>
      <Typography>Among Us</Typography>
      </Box>
      <Box sx={{width: '50%'}}>
        <Typography align='center' color={"dashboard.primary"}>$25</Typography>
        <Typography align='center' color={"dashboard.primary"}>$30</Typography>
      </Box>
      </Grid>
    </Grid>
  )
}
