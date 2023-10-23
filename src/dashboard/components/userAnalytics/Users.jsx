import { CreditCard, Home, Inventory, Person, ShoppingCart } from "@mui/icons-material";
import { Box, Grid,Typography } from "@mui/material";

export const Users = () => {
  return (
    <Box sx={{ p: "5px", height: "100%" }}>
      <Box sx={{ borderTop: "3px solid #998693", height: '10%' }}>
        <Typography variant="h6" color={"dashboard.primary"}>
          Usuarios
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          p: "5px",
          display: "flex",
          justifyContent: "center",
          color: "dashboard.primary",
          height: '10%'
        }}
      >
        <Person />
        <Typography color={"dashboard.font"}>6</Typography>
      </Grid>
      <Grid
        container
        sx={{
          borderLeft: "solid 1px white",
          borderTop: "3px solid #998693",
          p: "5px",
          boxShadow: "5px 2px 10px 1px #000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-around',
          height: '80%'
        }}
      >
        <Typography variant="h6" color={"dashboard.primary"}>
          Usuarios
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "dashboard.primary",
              }}
            >
              <Home />
            </Grid>
            <Typography>5</Typography>
          </Box>
          <Typography fontSize={"12px"} color={"green"}>
            +2%
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "dashboard.primary",
              }}
            >
              <Inventory />
            </Grid>
            <Typography>5</Typography>
          </Box>
          <Typography fontSize={"12px"} color={"green"}>
            +2%
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "dashboard.primary",
              }}
            >
              <ShoppingCart />
            </Grid>
            <Typography>5</Typography>
          </Box>
          <Typography fontSize={"12px"} color={"error.main"}>
            -5%
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "dashboard.primary",
              }}
            >
              <CreditCard />
            </Grid>
            <Typography>5</Typography>
          </Box>
          <Typography fontSize={"12px"} color={"error.main"}>
            -12%
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
