/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../Styles/Button.scss";
const buttonFilter = ({ setCharacters }) => {
  const [staff, setStaff] = useState([]);
  const [students, setStudents] = useState([]);
  let urlStudents = " http://localhost:5008/students";
  let urlStaff = " http://localhost:5008/staff";

  useEffect(() => {
    fetch(urlStudents, {
      method: "GET",

      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log(error));

    fetch(urlStaff, {
      method: "GET",

      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => setStaff(data))
      .catch((error) => console.log(error));
  }, []);

  const filterStudent = () => {
    setCharacters(students);
  };

  const filterStaff = () => {
    setCharacters(staff);
  };

  return (
    <div className="button">
      <button className="button__filter" onClick={filterStudent}>
        <h4 className="button__filter--title">ESTUDIANTES</h4>
      </button>
      <button className="button__filter" onClick={filterStaff}>
        <h4 className="button__filter--title">STAFF</h4>
      </button>
    </div>
  );
};

export default buttonFilter;
