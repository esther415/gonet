import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Styles/Main.scss";
import ButtonFilter from "./ButtonFilter";
import Cards from "./Cards";

const App = () => {
  const [characters, setCharacters] = useState([]);

  let urlCharacter = " http://localhost:5008/character";

  useEffect(() => {
    fetch(urlCharacter, {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="main__header">
        <img src="icons/titleHarry.png" className="main__header--img" />
        <h2 className="main__header--title">Selecciona tu filtro</h2>
        <ButtonFilter setCharacters={setCharacters} characters={characters} />
      </div>
      <div className="main__card">
        <Cards character={characters}></Cards>
      </div>
    </div>
  );
};

export default App;
