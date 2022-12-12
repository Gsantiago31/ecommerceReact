import { Email, Place, WhatsApp } from "@mui/icons-material"
import { Divider, Grid, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const Footer = () => {
  return (
    <Grid container spacing={2} sx={{ background: '#414141', justifyContent: 'center', pt: '20px', pb: '20px'}}>
        <Grid item xs={10} sx={{display: {sx: 'none', md: 'flex'}, flexDirection: 'row', alignItem: 'center', justifyContent: 'space-evenly', color: 'fontColor.main' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <IconButton sx={{ color: 'fontColor.main' }}>Phone<WhatsApp sx={{ml: '5px'}} /></IconButton>
                <Divider sx={{ background: '#af20d3', height: '3px' }}/>
                <Typography variant='h6' sx={{ textAlign: 'center'}}>(+506) 7220-6552 - 7242-5263</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton sx={{ color: 'fontColor.main' }}>Email<Email sx={{ml: '5px'}} /></IconButton>
                <Divider sx={{ background: '#af20d3', height: '3px' }}/>
                <Typography variant='h6' sx={{ textAlign: 'center'}}>(+506) 7220-6552 - 7242-5263</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton sx={{ color: 'fontColor.main' }}>Location<Place sx={{ml: '5px'}} /></IconButton>
                <Divider sx={{ background: '#af20d3', height: '3px' }}/>
                <Typography variant='h6' sx={{ textAlign: 'center'}}>(+506) 7220-6552 - 7242-5263</Typography>
            </Box>
        </Grid>
        <Grid item xs={10}>
            <Divider sx={{ background: 'primary.main', height: '3px' }} />
        </Grid>
        <Grid item xs={10}>
            <Typography variant="h5" sx={{ textAlign: 'center', color: 'fontColor.main'}}>© ViV Twins | Valeria y Valentina</Typography>
        </Grid>
    </Grid>
  )
}
