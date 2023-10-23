import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveProduct } from "../../store/dashboard";

export const ProductItem = ({ id, title, description, shortDescription, available, tags, category, color, price, date, imageUrls, rating, quantity, weight }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(
      setActiveProduct({
        id,
        title,
        description,
        shortDescription,
        available,
        tags,
        category,
        color,
        price,
        date,
        imageUrls,
        rating,
        quantity,
        weight
      })
    );
  };

  const newTitle = useMemo(() => {
    return title.length > 20 ? title.substring(0, 20) + "..." : title;
  }, [title]);

  return (
    <ListItem
      key={id}
      disablePadding
      sx={{
        backgroundColor: "primary.main",
        borderBottom: "1px solid",
        borderBottomColor: "secondary.main",
      }}
    >
      <ListItemButton onClick={onClickNote}>
        <ListItemAvatar>
          <Avatar
            alt={title}
            src={imageUrls[0]}
            sx={{ width: 70, height: "auto" }}
          />
        </ListItemAvatar>
        <Grid
          container
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={6} md={9}>
            <ListItemText primary={newTitle} sx={{ ml: "2%" }} />
          </Grid>
          <Grid
            item
            xs={6}
            md={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ListItemText primary={`$ ${price}`} sx={{ textAlign: "center" }} />
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
