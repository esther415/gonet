/* eslint-disable */
import reducer from "./reducer";
import actions from "./actions";
import { watchFavoriteSagas as sagas } from "./sagas";

export const favorites = {
  actions,
  reducer,
  sagas,
};
