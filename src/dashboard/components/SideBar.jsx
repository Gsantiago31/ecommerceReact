import {
  Dashboard,
  Email,
  EventAvailable,
  Inventory,
  Leaderboard,
  Logout,
  Person,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../store";

const icons = [
  {
    name: "<Dashboard />",
  },
  {
    name: "<Search />",
  },
  {
    name: "<Leaderboard />",
  },
  {
    name: "<Email />",
  },
  {
    name: "<Person />",
  },
  {
    name: "<EventAvailable />",
  },
];

export const Sidebar = ({ drawerWidth = 60 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: {xs: 'none', md: 'block'} }}
    >
      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "dashboard.primary",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon>
            <Dashboard />
          </Icon>
        </Toolbar>
        <Divider sx={{ backgroundColor: "secondary.main" }} />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: "#000" }}>
            <Search />
          </IconButton>
        </Toolbar>
        <Divider sx={{ backgroundColor: "secondary.main" }} />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={"/analytics"}>
            <IconButton sx={{ color: "#000" }}>
              <Leaderboard />
            </IconButton>
          </Link>
        </Toolbar>
        <Divider sx={{ backgroundColor: "secondary.main" }} />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: "#000" }}>
            <Email />
          </IconButton>
        </Toolbar>
        <Divider sx={{ backgroundColor: "secondary.main" }} />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={'/profile'}>
          <IconButton sx={{ color: "#000" }}>
            <Person />
          </IconButton>
          </Link>
        </Toolbar>
        <Divider sx={{ backgroundColor: "secondary.main" }} />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: "#000" }}>
            <EventAvailable />
          </IconButton>
        </Toolbar>
        <Divider sx={{ backgroundColor: "secondary.main" }} />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={"/inventory"}>
            <IconButton sx={{ color: "#000" }}>
              <Inventory />
            </IconButton>
          </Link>
        </Toolbar>
        <Divider sx={{ backgroundColor: "secondary.main" }} />
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "100%",
            mb: "10px",
          }}
        >
          <IconButton onClick={onLogout} sx={{ color: "red" }}>
            <Logout />
          </IconButton>
        </Toolbar>
      </Drawer>
    </Box>
  );
};
