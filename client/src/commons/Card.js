import {
  CardMedia,
  Box,
  CardActionArea,
  Typography,
  CardContent,
} from "@mui/material";
import { FaHeart } from "react-icons/fa";
import StarIcon from "@mui/icons-material/Star";
import { Tooltip } from "antd";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import posterNotFound from "../static/404PosterNotFound.jpg";

const Card = ({ data, addToFavorite, removeFromFavorite, users }) => {
  const [like, setLike] = useState(false);

  const iconLike = () => {
    addToFavorite(data);
    setLike(!like);
  };

  const iconDisLike = () => {
    removeFromFavorite(data);
    setLike(!like);
  };

  let type = "";
  data.title ? (type = "movie") : (type = "tv");

  return (
    <Box sx={{ maxWidth: 345 }}>
      <CardActionArea component={RouterLink} to={`/single/${type}/${data.id}}`}>
        <CardMedia
          component="img"
          height="500"
          image={
            data.poster_path
              ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
              : posterNotFound
          }
          alt={data.name ? `poster ${data.name}` : `poster ${data.title}`}
        />
        <CardContent sx={{ color: "white" }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.name ? data.name : data.title}
          </Typography>
          <StarIcon style={{ color: "gold" }} /> {data.vote_average}
        </CardContent>
      </CardActionArea>

      {users.loggedInUser ? (
        !like ? (
          <Tooltip placement="rightTop">
            <FaHeart
              style={{ color: "white", cursor: "pointer"}}
              onClick={() => iconLike()}
            />
          </Tooltip>
        ) : (
          <Tooltip placement="rightTop">
            <FaHeart
              style={{ color: "red", cursor: "pointer"}}
              onClick={() => iconDisLike()}
            />
          </Tooltip>
        )
      ) : (
        ""
      )}
    </Box>
  );
};

export default Card;
