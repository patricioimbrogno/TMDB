import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Home from "./components/Home";
import SinglePage from "./components/SinglePage";
import UserPage from "./components/UserPage";
import { setUser } from "./state/user";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((user) => dispatch(setUser(user.data)))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:filter" element={<Content />}/>
        <Route path="/single/:type/:id" element={<SinglePage />} />
        <Route path="/user/*" element={<UserPage />} />
        <Route path="/search/*" element={<Content />}/>
      </Routes>
    </>
  );
};

export default App;
