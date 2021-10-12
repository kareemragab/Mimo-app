import { SET_FAVOURITES } from "../types";

export const setFavourite = (id) => {
  return (dispatch, getState) => {
    const { Favourites } = getState().FavouritesReducer;
    let index = Favourites.findIndex((item) => item == id);
    let favouritesArr = [...Favourites];
    if (index >= 0) {
      favouritesArr.splice(index, 1);
    } else {
      favouritesArr.push(id);
    }
    dispatch({ type: SET_FAVOURITES, payload: { Favourites: favouritesArr } });
  };
};
