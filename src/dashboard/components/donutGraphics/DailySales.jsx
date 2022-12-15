import {
  CreditCard,
  Home,
  Inventory,
  Person,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DonutChart from "./DonutChart";

export const DailySales = () => {
  return (
    <Box sx={{ p: "5px", height: "100%" }}>
      <Box
        sx={{
          borderTop: "3px solid #998693",
          height: "10%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography variant="h6" width="50%" color={"dashboard.primary"}>
          Ventas de Hoy
        </Typography>
        <Typography
          variant="h6"
          width="50%"
          color={"dashboard.terciary"}
          align="right"
        >
          20 Tue | 11:24
        </Typography>
      </Box>
      <Box sx={{ height: "60%" }}>
        <DonutChart />
      </Box>
      <Grid container sx={{ width: '90%', height: "10%"}}>
        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Typography fontSize={'12px'}>Ayer</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <ShoppingBag sx={{width: '15px', color: 'dashboard.secondary'}}/>
            <Typography fontSize={'12px'}>Ventas</Typography>
            </Box>
            <Typography align={'center'} fontSize={'15px'}>$132</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Person sx={{width: '15px', color: 'dashboard.secondary'}}/>
            <Typography fontSize={'12px'}>Uusuarios</Typography>
            </Box>
            <Typography align={'center'} fontSize={'15px'}>125</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Typography fontSize={'12px'}>Total Hoy</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Person sx={{width: '15px', color: 'dashboard.secondary'}}/>
            <Typography fontSize={'12px'} mt={'3px'}>65</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Home sx={{width: '15px', color: 'dashboard.secondary'}}/>
            <Typography fontSize={'12px'} mt={'3px'}>35</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Inventory sx={{width: '15px', color: 'dashboard.secondary'}}/>
            <Typography fontSize={'12px'} mt={'3px'}>25</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            <ShoppingCart sx={{width: '15px', color: 'dashboard.secondary'}}/>
            <Typography fontSize={'12px'} mt={'3px'}>12</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            <CreditCard sx={{width: '15px', color: 'dashboard.secondary'}}/>
            <Typography fontSize={'12px'} mt={'3px'}>5</Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
