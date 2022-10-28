import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Favorites from "./Favorites";
import heartImg from "../static/heart.jpg";

const UserPage = () => {
  const favorites = useSelector((state) => state.users.favorites);
  const users = useSelector((state) => state.users);

  if (favorites.length > 0) {
    return (
      <Grid
        sx={{ backgroundColor: "black" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
      >
        <Grid item md={12} xs={12}>
          {favorites.length > 0}?(
          <Box sx={{ backgroundColor: "black" }}>
            <Typography variant="h4" color="white">
              ¡Hola, {users.user.user}!
            </Typography>
            <Typography variant="h6" color="white">
              Mirá tus películas y programas de TV favoritos.
            </Typography>
            <br />
            <Favorites />
          </Box>
        </Grid>
      </Grid>
    );
  } else
    return (
      <Box>
        <Box sx={{ background: "black" }}>
          <br />
          <Typography variant="h4" color="white">
            ¡Hola, {users.user.user}!
          </Typography>
          <Typography variant="h6" color="white">
            No tenés películas o programas de TV en tus favoritos
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(${heartImg})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: "black",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%" },
                padding: { xs: 3, sm: 2, md: 20 },
                backgroundColor: "black",
                opacity: 0.5,
              }}
            >
              <Typography
                variant="h5"
                color="white"
                marginBottom="24%"
              ></Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
};

export default UserPage;
