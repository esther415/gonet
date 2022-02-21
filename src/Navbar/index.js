/* eslint-disable */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { favorites } from "../store/favorites";
import Modal from "../ModalsComponent/Modal";
import { useDispatch } from "react-redux";
import "../Styles/Navbar.scss";
const navbar = () => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.favorites);
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  const removeFav = (data) => {
    dispatch(favorites.actions.removeFavoriteCharacters(data));
  };

  return (
    <div className="navbar">
      <div className="navbar__content">
        <button className="navbar__content__button" data-cy="favorite-list">
          <h4 className="navbar__content__button--title">FAVORITOS </h4>{" "}
          <img
            src="icons/saveWhite.png"
            className="navbar__content__button--img"
          ></img>
          <div className="navbar__content__button__content">
            {favList.length ? (
              <>
                {favList.map((fav) => (
                  <>
                    <div className="navbar__content__button__content__dropdown">
                      <img
                        src={fav.image}
                        className="navbar__content__button__content__dropdown--img"
                      />
                      <p
                        className="navbar__content__button__content__dropdown--title"
                        data-cy="favorite-name"
                      >
                        {fav.name}
                      </p>
                      <div
                        onClick={() => removeFav(fav)}
                        className="   navbar__content__button__content__dropdown--icon"
                      >
                        <img
                          src="icons/trash.png"
                          data-cy="favorite-delete"
                        ></img>
                      </div>
                    </div>
                  </>
                ))}
              </>
            ) : (
              <p className="navbar__content__button__content--title">
                {" "}
                Sin favoritos
              </p>
            )}
          </div>
        </button>
      </div>
      <Modal show={show} setShow={setShow}></Modal>
      <button className="navbar__button" onClick={showModal}          data-cy="modal-createCharacter">
        <h4 className="navbar__button--title"> AGREGAR </h4>
        <img src="icons/user.png" className="navbar__button--img"></img>
      </button>
    </div>
  );
};

export default navbar;
