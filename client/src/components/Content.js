import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../commons/Card";
import { useSelector, useDispatch } from "react-redux";
import { addToFavs, removeFromFavs } from "../state/user";
import { useParams } from "react-router-dom";



const Content = () => {

  const apiURL = "https://api.themoviedb.org/3";
  const apiKey = "94edf85f6bf18e21bb971c775681efa6";
  const searchedData = useSelector((state) => state.search);
  const [collection, setCollection] = useState([]);
  const { type,filter } = useParams();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
 

  const addToFavorite = (data) => {
    dispatch(addToFavs(data));
  };

  const removeFromFavorite = (data) => {
    dispatch(removeFromFavs(data));
  };

  useEffect(() => {
    axios
      .get(`${apiURL}/${type}/${filter}?api_key=${apiKey}&language=es&page=1`)
      .then((res) => res.data)
      .then((data) => setCollection(data.results))
      .catch((err) => {
        console.log(err);
      });
  }, [type,filter]);

  if(searchedData.length>0) {
    return (
      <Grid sx={{backgroundColor:'black'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        {searchedData.map((data) => (
          <Grid key={data.id} item md={2} xs={12}>
            <Card data={data} users={users} removeFromFavorite={removeFromFavorite} addToFavorite={addToFavorite}/>
          </Grid>
        ))}
      </Grid>
    );
  }else { return (
      <Grid sx={{backgroundColor:'black'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        {collection.map((data) => (
          <Grid key={data.id} item md={2} xs={12}>
            <Card data={data} users={users} removeFromFavorite={removeFromFavorite} addToFavorite={addToFavorite}/>
          </Grid>
        ))}
      </Grid>
    )}
  
};

export default Content;
