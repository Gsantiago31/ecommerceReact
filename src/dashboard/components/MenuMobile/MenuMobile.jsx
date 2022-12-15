import { Home } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const MenuMobile = () => {

    const [anchorElWish, setAnchorElWish] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorElWish(event.currentTarget);
      };
    
      const handleCloseMenu = () => {
        setAnchorElWish(null);
      };

  return (
    <>
    <Tooltip title="Open settings">
          <IconButton
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
              <Typography textAlign="center">Analítica</Typography>
            </NavLink>
          </MenuItem>
        </Menu>
        </>
  )
}
