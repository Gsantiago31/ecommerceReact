import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderItem = () => {
  return (
    <>
    <Grid container m={'5px'} sx={{borderLeft: 'solid 1px white', p: '5px', boxShadow: '5px 2px 10px 1px #000000'}}> 
        <Grid item xs={6}>
            <Typography color={'dashboard.terciary'} fontSize={'10px'}>Hace 5 min</Typography>
            <Typography color={'dashboard.font'} fontSize={'15px'}>Nombre Apellidos</Typography>
            <Typography color={'dashboard.font'} fontSize={'15px'}>Dirección</Typography>
            <Typography color={'dashboard.terciary'} align={'center'} fontSize={'10px'}>Nombre Producto</Typography>
        </Grid>
        <Grid item xs={6}>
            <Grid container sx={{height: '100%'}}>
            <Grid item xs={5}>
            <Typography color={'dashboard.primary'} align='center'>Total</Typography>
            <Typography color={'dashboard.primary'} align='center'>$ 25</Typography>
            </Grid>
            <Grid item xs={7}>
            <Grid height={'100%'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '5%', flexWrap: 'wrap'}}>
                <Grid sx={{width: '40%' , height: '40%', backgroundColor: 'white'}}></Grid>
                <Grid sx={{width: '40%' , height: '40%', backgroundColor: 'white'}}></Grid>
                <Grid sx={{width: '40%' , height: '40%', backgroundColor: 'white'}}></Grid>
                <Grid sx={{width: '40%' , height: '40%', backgroundColor: 'white'}}></Grid>
            </Grid>
            </Grid> 
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}
