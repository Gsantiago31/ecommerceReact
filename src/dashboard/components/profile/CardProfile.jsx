import { Avatar, Divider, Grid, Typography } from '@mui/material'

export const CardProfile = ({name, rol, url}) => {
  return (
    <Grid>
        <Avatar sx={{height: '250px', width: '250px'}}
        src={url}
        />
        <Divider sx={{m: '15px'}}/>
        <Typography variant='h5' align='center'>{name}</Typography>
        <Typography variant='h6' align='center'>{rol}</Typography>
    </Grid>
  )
}
