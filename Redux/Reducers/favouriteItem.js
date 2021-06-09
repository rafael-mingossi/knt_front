import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  CLEAR_FAVOURITE,
} from "../constants";

const favouriteItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return [...state, action.payload]; //payload will be the items passed through this action
    case REMOVE_FROM_FAVOURITE:
      return state.filter((favouriteItem) => favouriteItem !== action.payload);
    case CLEAR_FAVOURITE:
      return (state = []);
  }
  return state;
};

export default favouriteItems;
