import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../commons/Item";
import { removeFromFavs } from "../state/user";

export default function Sidebar() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.users.favorites);

  const removeFromFavorite = (data) => {
    dispatch(removeFromFavs(data));
  };

  return (
    <>
      <Grid sx={{backgroundColor:'black'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        {favorites.map((fav) => (
          <Grid key={fav.id} item md={2} xs={12}>
            <Item collection={fav} removeFromFavorite={removeFromFavorite} />
          </Grid>
        ))}
      </Grid>
      ;
    </>
  );
}
