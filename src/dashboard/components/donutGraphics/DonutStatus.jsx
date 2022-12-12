import { Grid, Typography } from '@mui/material'
import { DonutChart } from '@tremor/react';
import React from 'react'

const cities = [
    {
        name: 'New York',
        sales: 9800,
    },
    {
        name: 'total',
        sales: 5000
    }
];

const valueFormatter = (number) => (
    `$ ${Intl.NumberFormat('us').format(number).toString()}`
);

export const DonutStatus = () => {
  return (
    <Grid container>
       <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: 'solid 1px white', boxShadow: '5px 2px 10px 1px #000000'}}>
       <DonutChart
            data={ cities }
            category="sales"
            dataKey="name"
            valueFormatter={ valueFormatter }
            colors={["pink", "stone", "rose", "cyan", "amber"]}
            height="h-28"
        />
        <Typography fontSize={'10px'} color={'dashboard.font'}>Hace 7 días</Typography>
        </Grid>
        <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: 'solid 1px white', boxShadow: '5px 2px 10px 1px #000000'}}>
       <DonutChart
            data={ cities }
            category="sales"
            dataKey="name"
            valueFormatter={ valueFormatter }
            colors={["pink", "stone", "rose", "cyan", "amber"]}
            height="h-28"
        />
        <Typography fontSize={'10px'} color={'dashboard.font'}>Media semanal</Typography>
        </Grid> 
        <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: 'solid 1px white', boxShadow: '5px 2px 10px 1px #000000'}}>
       <DonutChart
            data={ cities }
            category="sales"
            dataKey="name"
            valueFormatter={ valueFormatter }
            colors={["pink", "stone", "rose", "cyan", "amber"]}
            height="h-28"
        />
        <Typography fontSize={'10px'} color={'dashboard.font'}>Media mensual</Typography>
        </Grid>  
        <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: 'solid 1px white', boxShadow: '5px 2px 10px 1px #000000'}}>
       <DonutChart
            data={ cities }
            category="sales"
            dataKey="name"
            valueFormatter={ valueFormatter }
            colors={["pink", "stone", "rose", "cyan", "amber"]}
            height="h-28"
        />
        <Typography fontSize={'10px'} color={'dashboard.font'} >Media anual</Typography>
        </Grid> 
    </Grid>
  )
}
