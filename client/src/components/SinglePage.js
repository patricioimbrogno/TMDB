import { Grid, CardMedia, Typography, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const apiURL = "https://api.themoviedb.org/3";
  const apiKey = "94edf85f6bf18e21bb971c775681efa6";
  const { type, id } = useParams();
  const [collection, setCollection] = useState({});

  useEffect(() => {
    axios
      .get(`${apiURL}/${type}/${id}?api_key=${apiKey}&language=es&page=1`)
      .then((res) => res.data)
      .then((data) => setCollection(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id, type]);

  return (
    <Grid
      sx={{ backgroundColor: "black" }}
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 1 }}
    >
      <Grid item md={6} xs={12}>
        <CardMedia
          component="img"
          height="100%"
          width="20%"
          image={`https://image.tmdb.org/t/p/original/${collection.poster_path}`}
          alt={
            collection.name
              ? `poster ${collection.name}`
              : `poster ${collection.title}`
          }
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <CardContent sx={{ color: "white" }}>
          <Typography variant="h2">{type === "tv" ? "TV" : "CINE"}</Typography>
          <Typography gutterBottom variant="h5" component="div">
            {collection.name ? collection.name : collection.title}
          </Typography>
          <Typography variant="body1">SINOPSIS</Typography>
          <br />
          <Typography variant="body2">{collection.overview}</Typography>
          <br />
          <Typography variant="body1">FICHA</Typography>
          <br />
          <Typography variant="body2">
            <RecordVoiceOverIcon style={{ color: "gold" }} /> Idioma original:{" "}
            {collection.original_language}
          </Typography>
          <Typography variant="body2">
            <AccessTimeIcon style={{ color: "gold" }} /> Duración:
            {collection.runtime ? ` ${collection.runtime} minutos` : ` Informacion no disponible`}
          </Typography>
          <Typography variant="body2">
            <ThumbUpAltIcon style={{ color: "gold" }} /> Popularidad:{" "}
            {collection.popularity} votos
          </Typography>
          <Typography variant="body2">
            <StarIcon style={{ color: "gold" }} /> Ranking:{" "}
            {collection.vote_average}
          </Typography>
          <br />
          <Typography variant="body1">GÉNERO</Typography>
          <br />
          {collection.genres?(collection.genres.map((g) => (
            <Typography variant="body2">{g.name}</Typography>
          ))):("")}
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default SinglePage;
