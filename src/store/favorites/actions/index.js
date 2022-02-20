export const ADD_FAVORITES_CHARACTERS = "ADD_FAVORITES_CHARACTERS";
export const REMOVE_FAVORITES_CHARACTERS = "REMOVE_FAVORITES_CHARACTERS";
export const FETCH_FAVORITES_CHARACTERS = "FETCH_FAVORITES_CHARACTERS";
export const SET_FAVORITES = "SET_FAVORITES";
export const addFavoriteCharacters = (payload) => {
  return { type: ADD_FAVORITES_CHARACTERS, payload };
};

export const removeFavoriteCharacters = (payload) => {
  return { type: REMOVE_FAVORITES_CHARACTERS, payload };
};

const actions = {
  addFavoriteCharacters,
  removeFavoriteCharacters,
};
export default actions;
