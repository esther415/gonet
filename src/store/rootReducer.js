import { combineReducers } from "redux";
import { favorites } from "./favorites";

export default combineReducers({
  fav: favorites.reducer,
});
