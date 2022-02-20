/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../Styles/Button.scss";
const buttonFilter = ({ setCharacters }) => {
  const [staff, setStaff] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("json/hp-staff.json")
      .then((response) => response.json())
      .then((data) => setStaff(data));

    fetch("json/hp-students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data));
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
