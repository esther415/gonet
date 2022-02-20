import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Styles/Main.scss";
import ButtonFilter from "./ButtonFilter";
import Cards from "./Cards";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [students, setStudents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("json/hp-characters.json")
      .then((response) => response.json())
      .then((datos) => setCharacters(datos));

    fetch("json/hp-students.json")
      .then((response) => response.json())
      .then((datos) => setStudents(datos));
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="main__header">
        <img src="icons/titleHarry.png" className="main__header--img" />
        <h2 className="main__header--title">Selecciona tu filtro</h2>
        <ButtonFilter
          setCharacters={setCharacters}
          characters={characters}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className="main__card">
        <Cards students={students} character={characters}></Cards>
      </div>
    </div>
  );
};

export default App;
