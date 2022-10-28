import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const ButtonHome = ({type, popularMovie, popularTV, rankingMovie, rankingTV, estrenoMovie, estrenoTV, cines}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const handlePopularMovie = () => {
    navigate('/movie/popular')
  };
  const handlePopularTV = () => {
    navigate('/tv/popular')
  };
  const handleRankingMovie = () => {
    navigate('/movie/top_rated')
  };
  const handleRankingTV = () => {
    navigate('/tv/top_rated')
  };
  const handleEstrenoMovie = () => {
    navigate('/movie/upcoming')
  };
  const handleEstrenoTV = () => {
    navigate('/tv/on_the_air')
  };
  const handleCinesMovie = () => {
    navigate('/movie/now_playing')
  };
 
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {type}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handlePopularMovie} disableRipple>
          {popularMovie} 
        </MenuItem>
        <MenuItem onClick={handlePopularTV} disableRipple>
          {popularTV}
        </MenuItem>
        <MenuItem onClick={handleRankingMovie} disableRipple>
          {rankingMovie}
        </MenuItem>
        <MenuItem onClick={handleRankingTV} disableRipple>
          {rankingTV}
        </MenuItem>
        <MenuItem onClick={handleEstrenoMovie} disableRipple>
          {estrenoMovie}
        </MenuItem>
        <MenuItem onClick={handleEstrenoTV} disableRipple>
          {estrenoTV}
        </MenuItem>
        <MenuItem onClick={handleCinesMovie} disableRipple>
          {cines}
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default ButtonHome;
