import {
  CardMedia,
  Box,
  CardActionArea,
  Typography,
  CardContent,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import posterNotFound from "../static/404PosterNotFound.jpg";
import { FaTrash } from "react-icons/fa";
import StarIcon from "@mui/icons-material/Star";

function Item({ collection, removeFromFavorite }) {
  let type = "";
  collection.title ? (type = "movie") : (type = "tv");

  return (
    <Box key={collection.id}>
      <CardActionArea component={RouterLink} to={`/single/${type}/${collection.id}}`}>
        <CardMedia
          component="img"
          height="500"
          image={
            collection.poster_path
              ? `https://image.tmdb.org/t/p/original/${collection.poster_path}`
              : posterNotFound
          }
          alt={
            collection.name
              ? `poster ${collection.name}`
              : `poster ${collection.title}`
          }
        />
        <CardContent sx={{ color: "white" }}>
          <Typography gutterBottom variant="h5" component="div">
            {collection.name ? collection.name : collection.title}
          </Typography>
          <StarIcon style={{ color: "gold" }} /> {collection.vote_average}
          <br />
        </CardContent>
      </CardActionArea>
      <FaTrash
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => removeFromFavorite(collection)}
          />
    </Box>
  );
}

export default Item;
