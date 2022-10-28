import React from "react";
import { useNavigate } from "react-router-dom";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import Register from "./Register";
import logo from "../static/logo.png";
import { Link as LinkReact } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonHome from "../commons/ButtonHome";

import { AppBar, styled, Toolbar, Box, Button } from "@mui/material";

const Navbar = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const LoginBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  const handleUserButton = () => {
    navigate(`/user/${users.user.user}/favorites`);
  }

  return (
    <div>
      <AppBar sx={{ background: "black" }} position={"static"}>
        <StyledToolBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <LinkReact to={"/"}>
              <img src={logo} alt="logo" height={40} />
            </LinkReact>
            
          </Toolbar>
          <Toolbar>
          <ButtonHome
            type={"Peliculas"}
            popularMovie={"Más populares"}
            rankingMovie={"Mejor rankeadas"}
            estrenoMovie={"Pronto a estrenar"}
            cines={"En cines ahora"}
          />
          <ButtonHome
            type={"TV"}
            popularTV={"Más populares"}
            rankingTV={"Mejor rankeados"}
            estrenoTV={"En el aire ahora"}
          />
          </Toolbar>
          {users.loggedInUser ? (
            <LoginBox>
              <Button variant="outlined" onClick={handleUserButton}>{users.user.user}</Button>
              <LogOut />
            </LoginBox>
          ) : (
            <LoginBox>
              <LogIn />
              <Register />
            </LoginBox>
          )}
        </StyledToolBar>
      </AppBar>
    </div>
  );
};

export default Navbar;
