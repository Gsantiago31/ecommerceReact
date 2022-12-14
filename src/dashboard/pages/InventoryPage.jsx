import { AddOutlined, Home } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startNewProduct } from "../../store/dashboard";
import { MenuMobile, ProductList } from "../components";
import { DashboardLayout } from "../layout";
import { NothingSelectedView, ProductView } from "../views";

export const InventoryPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.dashboard);
  const [anchorElWish, setAnchorElWish] = useState(null);

  const onCLickNewProduct = () => {
    dispatch(startNewProduct());
  };

  const handleOpenMenu = (event) => {
    setAnchorElWish(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElWish(null);
  };

  return (
    <>
      <DashboardLayout>
        {!!active ? <ProductView /> : <NothingSelectedView />}

        <IconButton
          disabled={isSaving}
          onClick={onCLickNewProduct}
          size="large"
          sx={{
            color: "white",
            backgroundColor: { xs: "dashboard.terciary", md: "secondary.main" },
            ":hover": { backgroundColor: "secondary.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

        <MenuMobile />
        {/* <Tooltip title="Open settings">
          <IconButton
            disabled={isSaving}
            onClick={handleOpenMenu}
            size="small"
            sx={{
              display: { xs: "fixed", md: "none" },
              color: "white",
              backgroundColor: {
                xs: "dashboard.terciary",
                md: "secondary.main",
              },
              ":hover": { backgroundColor: "secondary.main", opacity: 0.9 },
              position: "fixed",
              right: 30,
              top: 5,
            }}
          >
            <Home sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElWish}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElWish)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>
            <NavLink
              to={`/dashboard`}
              style={({ isActive }) => ({
                color: isActive ? "#e30052" : "#000",
                textDecoration: "none",
              })}
            >
              <Typography textAlign="center">Dashboard</Typography>
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <NavLink
              to={`/profile`}
              style={({ isActive }) => ({
                color: isActive ? "#e30052" : "#000",
                textDecoration: "none",
              })}
            >
              <Typography textAlign="center">Perfil</Typography>
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <NavLink
              to={`/inventory`}
              style={({ isActive }) => ({
                color: isActive ? "#e30052" : "#000",
                textDecoration: "none",
              })}
            >
              <Typography textAlign="center">Inventario</Typography>
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <NavLink
              to={`/analytics`}
              style={({ isActive }) => ({
                color: isActive ? "#e30052" : "#000",
                textDecoration: "none",
              })}
            >
              <Typography textAlign="center">Anal??tica</Typography>
            </NavLink>
          </MenuItem>
        </Menu> */}
      </DashboardLayout>
    </>
  );
};
