import { Avatar, Divider, Grid, Typography } from '@mui/material'

export const CardProfile = ({name, rol, url}) => {
  return (
    <Grid>
        <Avatar sx={{height: {xs: '200px', md: '250px'}, width: { xs: '200px', md: '250px'}}}
        src={url}
        />
        <Divider sx={{m: '15px'}}/>
        <Typography variant='h5' align='center'>{name}</Typography>
        <Typography variant='h6' align='center'>{rol}</Typography>
    </Grid>
  )
}
