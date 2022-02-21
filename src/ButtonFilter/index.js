/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../Styles/Button.scss";
const buttonFilter = ({ setCharacters }) => {
  const [charactersLis, setCharactersList] = useState([]);
  let urlCharacter = " http://localhost:5008/character";

  useEffect(() => {
    fetch(urlCharacter, {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => setCharactersList(data))
      .catch((error) => console.log(error));
  }, []);
  const filterStudent = () => {
    const studentsFilter = charactersLis.filter(
      (character) => character.hogwartsStudent
    );

    setCharacters(studentsFilter);
  };

  const filterStaff = () => {
    const staffFilter = charactersLis.filter(
      (character) => character.hogwartsStaff
    );
    setCharacters(staffFilter);
  };

  return (
    <div className="button">
      <button className="button__filter" onClick={filterStudent}  data-cy="student-filter">
        <h4 className="button__filter--title">ESTUDIANTES</h4>
      </button>
      <button className="button__filter" onClick={filterStaff}  data-cy="staff-filter">
        <h4 className="button__filter--title">STAFF</h4>
      </button>
    </div>
  );
};

export default buttonFilter;
