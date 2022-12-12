import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { ProductItem } from './ProductItem';

export const ProductList = () => {
  
    const { products } = useSelector( state => state.dashboard );

    return (
    <Box>
        <Grid
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' }, backgroundColor: 'secondary.main', height: '100vh'
            }}
        >
            <Toolbar
            sx={{backgroundColor: 'secondary.main'}}
            >
                <Typography variant='h6' noWrap component='div' color='white' >
                   Lista de Productos
                </Typography>
            </Toolbar>
            <Divider sx={{backgroundColor: 'dashboard.blue'}} />

            <List>
                {
                    products.map( product => (
                        <ProductItem key={ product.id } { ...product }/>
                    ))
                }
            </List>

        </Grid>

    </Box>
  )
}