import { all, fork } from "redux-saga/effects";
import { favorites } from "./favorites";

export default function* rootSaga() {
  yield all([fork(favorites.sagas)]);
}
