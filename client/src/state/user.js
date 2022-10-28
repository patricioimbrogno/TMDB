
import { createAction, createReducer } from "@reduxjs/toolkit";
export const setUsuario = createAction("SET_USUARIO");
export const logOut = createAction("LOG_OUT");
export const addToFavs = createAction("ADD_TO_FAVORITES");
export const removeFromFavs = createAction("REMOVE_FROM_FAVORITES");

const initialState = {
    user:{},
    loggedInUser: false,
    favorites: [],
  };

  export default createReducer(initialState, {
    [setUsuario]: (state, action) => {
        return {...state, user: action.payload, loggedInUser:true, favorites: [] }
    },
    [logOut]:(state, action) => {
        return {...state, user: null, loggedInUser:false, favorites: [] }
    },

    [addToFavs]: (state, action) => {
      if (state.favorites.find((fav) => fav.id === action.payload.id)) {
        return state;
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    },
    [removeFromFavs]: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload.id),
      };
    },
  });


