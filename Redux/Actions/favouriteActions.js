import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  CLEAR_FAVOURITE,
  SET_UNFAV_BTN,
  SET_FAV_BTN,
  CLEAR_BTN,
  GET_CHARACTERS,
} from "../constants";

import baseURL from "../../assets/common/baseUrl";
import axios from "axios";

export const getCharacters = () => {
  try {
    return async (dispatch) => {
      const res = await axios.get(`${baseURL}extapis`);

      if (res.data) {
        dispatch({
          type: GET_CHARACTERS,
          payload: res.data.results,
        });
      } else {
        console.log("Unable to fetch");
      }
    };
  } catch (error) {
    console.log("Api characters call error");
  }
};

export const addFavorite = (fav) => (dispatch) => {
  dispatch({
    type: ADD_TO_FAVOURITE,
    payload: fav,
  });
};

export const removeFavorite = (fav) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  });
};
