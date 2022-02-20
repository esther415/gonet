/* eslint-disable */
const SET_FAVORITES = "SET_FAVORITES";

const INTIAL_STATE = {
  favorites: [],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};
