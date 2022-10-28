import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../state/search";
import { Box, styled, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const apiURL = "https://api.themoviedb.org/3";
const apiKey = "94edf85f6bf18e21bb971c775681efa6";

const SearchBox = styled(Box)({
  display: "flex",
  width: "100%",
});

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [foundedData, setFoundedData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `${apiURL}/search/multi/?api_key=${apiKey}&language=es&query=${searchedValue}&include_adult=false`
      )
      .then((res) => res.data)
      .then((data) => setFoundedData(data.results))
      .then(() => navigate(`/search/${searchedValue}`))
      .catch((err) => {
        console.log(err);
      });
  };
  dispatch(setSearch(foundedData));
  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchBox>
          <TextField
            id="full-width-text-field"
            value={searchedValue}
            onChange={handleSearch}
            placeholder="Buscá tu serie o película favorita..."
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              width: "55%",
            }}
            InputProps={{
              startAdornment: (
                <IconButton type="submit" aria-label="search">
                  <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
              ),
            }}
          >
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </TextField>
        </SearchBox>
      </form>
    </>
  );
};

export default SearchBar;
