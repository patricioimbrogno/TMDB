import { Box, Typography } from "@mui/material";
import React from "react";
import headerImg from "../static/collagemovies.jpg";
import SearchBar from "./SearchBar";
import Footer from "../components/Footer";

const Home = () => {
 
  return (
    <>
    <Box>
      <Box sx={{ background: "black" } }>
        <Box
          sx={{
            backgroundImage: `url(${headerImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: { xs: "100%", sm: "100%", md: "100%" },
            width: "100vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%" },
              height: { xs: "100%", sm: "100%", md: "100%" },
              padding: { xs: 3, sm: 2, md: 20 },
              backgroundColor: 'black',
              opacity: 0.7
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", opacity:5 }}
              variant="h2"
              color="white"
              align="left"
              pt={2}
            >
              Bienvenid@ a TMDB
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="white"
              marginBottom={4}
            >
              La más amplia base de datos audiovisual
            </Typography>
            <SearchBar />
            <br />
          </Box>
        </Box>
      </Box>
    </Box>
    <Footer />
    </>
  );
};

export default Home;
