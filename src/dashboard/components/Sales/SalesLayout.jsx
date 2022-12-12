import { Box, Grid, Typography } from "@mui/material"
import { Refunded } from "./Refunded"
import { Sale } from "./Sale"

export const SalesLayout = () => {
  return (
    <Box sx={{p: '5px', height: '100%'}}>
        <Box sx={{ borderTop: '3px solid #998693'}}>
        <Typography variant='h6' color={'dashboard.primary'} >Ventas</Typography>
        </Box>
        <Grid container sx={{p: '5px'}}>
        <Sale />
        </Grid>
        <Grid container sx={{borderLeft: 'solid 1px white', borderTop: '2px solid red' , p: '5px', boxShadow: '5px 2px 10px 1px #000000', height: '34%'}}>
        <Refunded />
        </Grid>
    </Box>
  )
}
