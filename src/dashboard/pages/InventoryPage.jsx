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

  const onCLickNewProduct = () => {
    dispatch(startNewProduct());
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
       
      </DashboardLayout>
    </>
  );
};
