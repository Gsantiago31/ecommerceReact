import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CardProfile, MenuMobile } from '../components'
import { DashboardLayout } from '../layout'

export const ProfilePage = () => {
  return (
    <DashboardLayout>

        <Grid container className="animate__animated animate__fadeIn animate__slow" sx={{backgroundColor: 'dashboard.background', width: '100vw', height: '100vh', p: '20px'}}>
        <MenuMobile />
            <Grid item xs={12}> <Typography variant='h4' align='center'>Our Team</Typography> </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-around', alignItems: 'center', mt: '20px'}}>
                <CardProfile name={'Valentina'} rol={'Fundadora'} url={'https://firebasestorage.googleapis.com/v0/b/viv-twins.appspot.com/o/valen.JPG?alt=media&token=45d52d02-9ae5-43cc-9f7f-8485e4e99db1'}/>
                <CardProfile name={'Valeria'} rol={'Fundadora'} url={'https://firebasestorage.googleapis.com/v0/b/viv-twins.appspot.com/o/vale.JPG?alt=media&token=945d1180-cfed-4a8b-828a-c27e45eb6789'}/>
            </Grid> 
        </Grid>

    </DashboardLayout>
  )
}
