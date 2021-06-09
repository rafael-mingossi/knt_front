import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  CLEAR_FAVOURITE,
} from "../constants";

export const addToFavourite = (payload) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload,
  };
};

export const removeFromFavourite = (payload) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload,
  };
};

export const clearFavourite = () => {
  return {
    type: CLEAR_FAVOURITE,
  };
};
