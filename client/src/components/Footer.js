import React from "react";
import { Box, Container, Paper, Typography, styled, Link } from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material/";

const Footer = () => {
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "black",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="white">
            Copyright ©2022.
          </Typography>

          <SocialBox>
            <Typography variant="caption" color="white">
              ¡Seguinos!
            </Typography>
            <Link href="https://www.facebook.com/themoviedb/" target="_blank">
              <Facebook />
            </Link>
            <Link href="https://www.twitter.com/themoviedb/" target="_blank">
              <Twitter />
            </Link>
          </SocialBox>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
