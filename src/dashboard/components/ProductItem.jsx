import { Inventory, TurnedInNot } from "@mui/icons-material";
import { Avatar, Divider, Grid, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveProduct } from "../../store/dashboard";

export const ProductItem = ({ title = '', description, shortDescription, color, price, tags, id, date, imageUrls = []  }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveProduct({ title, id, description, shortDescription, color, price, tags, date, imageUrls }))
  }

  const newTitle = useMemo(() => {

    return title.length > 17
    ? title.substring(0, 17) + '...'
    : title;

  },[ title ])

  return (
    <ListItem key={id} disablePadding
    sx={{backgroundColor: 'primary.main', borderBottom: '1px solid', borderBottomColor: 'secondary.main'}}>
      <ListItemButton onClick={ onClickNote }>
        <ListItemAvatar>
          <Avatar
            alt={title}
            src={imageUrls[0]}
          />
        </ListItemAvatar>
        <Grid container sx={{color: '#fff'}}>
          <ListItemText 
          primary={ newTitle }
          />
          <ListItemText
            primary={ color }
          />
          <ListItemText
          primary={price}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
