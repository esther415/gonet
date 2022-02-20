/* eslint-disable */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { favorites } from "../store/favorites";
import { useSelector } from "react-redux";
import "../Styles/Cards.scss";

const Cards = ({ students, character }) => {
  const [charactersList, setCharactersList] = useState([]);

  const [toogleChecked, setToogleChecked] = useState(true);
  const favList = useSelector((state) => state.fav.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const list = character.map((result) => {
      return {
        ...result,
        isChecked: false,
      };
    });
    setCharactersList([...list]);
  }, [character, favList]);

  const handleChangeCheckbox = (e, item) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let newFavChecked = [...charactersList];

    for (let [index, newFav] of Object.entries(newFavChecked)) {
      if (newFav.name === item.name) {
        newFav.isChecked = value;
        newFavChecked[index] = newFav;
        setCharactersList(newFavChecked);
      }
    }
    if (favList.length < 5) {
      if (e.target.checked) {
        dispatch(favorites.actions.addFavoriteCharacters(item));
      } else {
        dispatch(favorites.actions.removeFavoriteCharacters(item));
      }
    }
  };

  return (
    <div className="cards">
      {charactersList.map((data) => (
        <>
          <div className="cards__content">
            {data.house === "Gryffindor" && (
              <div className="cards__content__div1">
                <img src={data.image} className="cards__content__div1--image" />
              </div>
            )}

            {data.house === "Slytherin" && (
              <div className="cards__content__div2">
                <img src={data.image} className="cards__content__div1--image" />
              </div>
            )}

            {data.house === "Ravenclaw" && (
              <div className="cards__content__div3">
                <img src={data.image} className="cards__content__div1--image" />
              </div>
            )}

            {data.house === "Hufflepuff" && (
              <div className="cards__content__div4">
                <img src={data.image} className="cards__content__div1--image" />
              </div>
            )}

            {!data.house && (
              <div className="cards__content__div5">
                <img src={data.image} className="cards__content__div1--image" />
              </div>
            )}

            {data.alive ? (
              <div className="cards__content__container">
                <div className="cards__content__container__div">
                  <div className="cards__content__container__div__status">
                    <h4 className="cards__content__container__div__status--title">
                      {" "}
                      VIVO{" "}
                    </h4>

                    <h4 className="cards__content__container__div__status--paragraph">
                      {" "}
                      /{" "}
                    </h4>
                    <h4 className="cards__content__container__div__status--title">
                      {students.map((std) => std.name).includes(data.name)
                        ? "ESTUDIANTE"
                        : "STAFF"}
                    </h4>
                  </div>
                  <div className="imgDiv">
                    <label className="checkeable">
                      <input
                        checked={
                          favList.map((list) => list.name).includes(data.name)
                            ? true
                            : false
                        }
                        onChange={() => setToogleChecked(!toogleChecked)}
                        onClick={(e) => handleChangeCheckbox(e, data)}
                        name="checkList"
                        type="checkbox"
                        className="checkeableInput"
                      />
                      <span className="checkeableSpan"> </span>
                    </label>
                  </div>
                </div>
                <div className="cards__content__container__data">
                  <h1 className="cards__content__container__data--title">
                    {data.name}
                  </h1>
                </div>
                <div className="cards__content__container__data">
                  <h2 className="cards__content__container__data--subtitle">
                    Cumpleaños:{" "}
                  </h2>
                  <h3 className="cards__content__container__data--paragraph">
                    {data.dateOfBirth}
                  </h3>
                </div>
                <div className="cards__content__container__data">
                  <h2 className="cards__content__container__data--subtitle">
                    Genero:{" "}
                  </h2>
                  <h3 className="cards__content__container__data--paragraph">
                    {data.gender}
                  </h3>
                </div>
                <div className="cards__content__container__data">
                  <h2 className="cards__content__container__data--subtitle">
                    Color de ojos:{" "}
                  </h2>
                  <h3 className="cards__content__container__data--paragraph">
                    {data.eyeColour}
                  </h3>
                </div>
                <div className="cards__content__container__data">
                  <h2 className="cards__content__container__data--subtitle">
                    {" "}
                    Color de pelo:{" "}
                  </h2>
                  <h3 className="cards__content__container__data--paragraph">
                    {data.hairColour}
                  </h3>
                </div>
              </div>
            ) : (
              <div className="cards__content__containerDisabled">
                <div className="cards__content__containerDisabled__div">
                  <div className="cards__content__containerDisabled__div__status">
                    <h4 className="cards__content__containerDisabled__div__status--title">
                      FINADO{" "}
                    </h4>
                    <h4 className="cards__content__containerDisabled__div__status--paragraph">
                      /{" "}
                    </h4>

                    <h4 className="cards__content__containerDisabled__div__status--title">
                      {students.map((std) => std.name).includes(data.name)
                        ? "ESTUDIANTE"
                        : "STAFF"}
                    </h4>
                  </div>
                  <div className="imgDiv">
                    <label className="checkeable">
                      <input
                        checked={
                          favList.map((list) => list.name).includes(data.name)
                            ? true
                            : false
                        }
                        onChange={() => setToogleChecked(!toogleChecked)}
                        onClick={(e) => handleChangeCheckbox(e, data)}
                        name="checkList"
                        type="checkbox"
                        className="checkeableInput"
                      />
                      <span className="checkeableSpan"> </span>
                    </label>
                  </div>
                </div>
                <div className="cards__content__containerDisabled__data">
                  <h1 className="cards__content__containerDisabled__data--title">
                    {data.name}
                  </h1>
                </div>
                <div className="cards__content__containerDisabled__data">
                  <h2 className="cards__content__containerDisabled__data--subtitle">
                    Cumpleaños:{" "}
                  </h2>
                  <h3 className="cards__content__containerDisabled__data--paragraph">
                    {data.dateOfBirth}
                  </h3>
                </div>
                <div className="cards__content__containerDisabled__data">
                  <h2 className="cards__content__containerDisabled__data--subtitle">
                    Genero:{" "}
                  </h2>
                  <h3 className="cards__content__containerDisabled__data--paragraph">
                    {data.gender}
                  </h3>
                </div>
                <div className="cards__content__containerDisabled__data">
                  <h2 className="cards__content__containerDisabled__data--subtitle">
                    Color de ojos:{" "}
                  </h2>
                  <h3 className="cards__content__containerDisabled__data--paragraph">
                    {data.eyeColour}
                  </h3>
                </div>
                <div className="cards__content__containerDisabled__data">
                  <h2 className="cards__content__containerDisabled__data--subtitle">
                    {" "}
                    Color de pelo:{" "}
                  </h2>
                  <h3 className="cards__content__containerDisabled__data--paragraph">
                    {data.hairColour}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};
export default Cards;
