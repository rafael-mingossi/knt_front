import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  CLEAR_FAVOURITE,
  SET_UNFAV_BTN,
  SET_FAV_BTN,
  CLEAR_BTN,
  GET_CHARACTERS,
} from "../constants";

const initialState = {
  characters: [],
  favorites: [],
};

export const favouriteItems = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, characters: action.payload };
    case ADD_TO_FAVOURITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

// export const favouriteItems = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TO_FAVOURITE:
//       return state.concat(action.payload); //payload will be the items passed through this action
//     case REMOVE_FROM_FAVOURITE:
//       return state.filter((favouriteItem) => favouriteItem !== action.payload);
//     case CLEAR_FAVOURITE:
//       return (state = []);
//     default:
//       return state;
//   }
//   // return state;
// };
