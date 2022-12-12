import { Grid } from '@mui/material'
import React from 'react'
import { AreaChartStatus, DailySales, DonutStatus, OrderLayout, SalesLayout, Users } from '../components'
import { DashboardLayout } from '../layout'

export const AnalyticsPage = () => {
  return (
    <DashboardLayout>
        <Grid container className="animate__animated animate__fadeIn animate__slow" sx={{backgroundColor: 'dashboard.background'}}>
            <Grid item xs={6} sx={{height: '100vh', backgroundColor: 'dashboard.background'}}>
                <Grid container sx={{height: '100%'}}>
                    <Grid item xs={9} sx={{ height: '50%'}}><DailySales /></Grid>
                    <Grid item xs={3} sx={{ height: '50%'}}><Users /></Grid>
                    <Grid item xs={12} sx={{ height: '20%'}}><DonutStatus /></Grid>
                    <Grid item xs={12} sx={{ height: '30%'}}><AreaChartStatus /></Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} sx={{height: '100vh'}}><OrderLayout /></Grid>
            <Grid item xs={3} sx={{height: '100vh'}}><SalesLayout /></Grid>
        </Grid>
    </DashboardLayout>
  )
}
