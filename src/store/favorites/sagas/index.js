/* eslint-disable */
import { call, all, put, takeLatest, select } from "redux-saga/effects";
/*Actions*/
import {
  ADD_FAVORITES_CHARACTERS,
  REMOVE_FAVORITES_CHARACTERS,
  FETCH_FAVORITES_CHARACTERS,
  SET_FAVORITES,
} from "../actions";

import { addFavoriteCharacters, removeFavoriteCharacters } from "../actions";

export function* addFavorite({ payload }) {
  const {
    fav: { favorites },
  } = yield select();
  let favoritesCharacters = [...favorites];
  let favPayload = [payload];
  favoritesCharacters = [...favPayload, ...favoritesCharacters];

  //Set the new map tasks on the store
  yield put({ type: SET_FAVORITES, payload: favoritesCharacters });
}

export function* removeFavorite({ payload }) {
  const {
    fav: { favorites },
  } = yield select();
  let favoritesCharacters = [...favorites];

  const favFilter = favoritesCharacters.filter(
    (fav) => payload.name !== fav.name
  );
  //Set the new map tasks on the store
  yield put({ type: SET_FAVORITES, payload: favFilter });
}

export function* fetchFavorite() {}

export function* watchFavoriteSagas() {
  yield all([
    yield takeLatest(ADD_FAVORITES_CHARACTERS, addFavorite),
    yield takeLatest(REMOVE_FAVORITES_CHARACTERS, removeFavorite),
    yield takeLatest(FETCH_FAVORITES_CHARACTERS, fetchFavorite),
  ]);
}
