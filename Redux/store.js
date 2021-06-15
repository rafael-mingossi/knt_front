import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { favouriteItems } from "./Reducers/favouriteItem";
// import { favBtnReducer } from "./Reducers/btnReducer";

const reducers = combineReducers({
  favouriteItems: favouriteItems,
  //favBtnReducer: favBtnReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
  //composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
