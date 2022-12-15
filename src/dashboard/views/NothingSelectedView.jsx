import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { ProductList } from "../components";

export const NothingSelectedView = () => {
  return (
    <>
      <Grid
        className="animate__animated animate__fadeIn animate__slow"
        container
        spacing={0}
        sx={{
          height: "100vh",
          backgroundColor: "dashboard.background",
          borderRadius: 3,
        }}
      >
          <Grid item xs={12} md={4}>
            <ProductList />
          </Grid>

          <Grid item xs={8} sx={{display: {xs: 'none', md: 'flex'}, flexDirection: 'column', alignItems: 'center'}}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StarOutline sx={{ fontSize: 100, color: "primary.main" }} />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography color="primary.main" variant="h5">
                {" "}
                Selecciona o crea un producto{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
    </>
  );
};
