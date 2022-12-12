import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";
import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { CardMedia, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

const pages = [
  {
    title: "Inicio",
    url: "/home",
  },
  {
    title: "Acerca de",
    url: "/about",
  },
  {
    title: "Catálogo",
    url: "/products",
  },
  {
    title: "Contacto",
    url: "/contact",
  },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElWish, setAnchorElWish] = useState(null);
  const { status } = useSelector( state => state.auth );

  const settings = [
    {
      title: "Profile",
      url: "/"
    },
    {
      title: "Account",
      url: "/"
    },
    {
      title: "Dashboard",
      url: "/"
    }
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenWishList = (event) => {
    setAnchorElWish(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseWishList = () => {
    setAnchorElWish(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink to={"/home"}>
              <CardMedia
                component="img"
                image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FLogo-ViV-twins.png?alt=media&token=8917e75a-3554-4ac3-a9e6-6a085ca9f15b"
                alt="Gsdesign"
                sx={{ height: "80px" }}
              />
            </NavLink>
          </Grid>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={`${page.url}`}
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#e30052",
                      textDecoration: "none",
                    })}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Grid
            item
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <NavLink to={"/home"}>
              <CardMedia
                component="img"
                image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FLogo-ViV-twins.png?alt=media&token=8917e75a-3554-4ac3-a9e6-6a085ca9f15b"
                alt="Gsdesign"
                sx={{ height: "50px" }}
              />
            </NavLink>
          </Grid>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "none", md: "flex-end" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to={`${page.url}`}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#e30052",
                    textDecoration: "none",
                  })}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <NavLink
                to={"/cart"}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#e30052",
                  textDecoration: "none",
                })}
              >
                <ShoppingCart></ShoppingCart>
              </NavLink>
            </IconButton>
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenWishList} sx={{ p: 0 }}>
                <Favorite sx={{ color: "secondary.main" }} />
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
              onClose={handleCloseWishList}
            >
                <MenuItem onClick={handleCloseWishList}>
                  <Typography textAlign="center">No items added</Typography>
                </MenuItem>
             
            </Menu>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Person sx={{ color: "secondary.main" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {status === "authenticated" 
              ? (settings.map( setting => (
                <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              )))
              : <MenuItem onClick={handleCloseUserMenu}>
                <NavLink 
                to={"/auth"}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#e30052",
                  textDecoration: "none",
                })}>
                  <Typography textAlign="center">Login</Typography>
                </NavLink>
                </MenuItem>}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
