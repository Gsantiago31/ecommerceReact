import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { OrderItem } from './OrderItem'

export const OrderLayout = () => {
  return (
    <Box sx={{p: '5px'}}>
        <Box sx={{ borderTop: '3px solid #998693'}}>
        <Typography variant='h6' color={'dashboard.primary'} >Últimos pedidos</Typography>
        </Box>
        <Grid container>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </Grid>
    </Box>
  )
}
