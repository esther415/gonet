import React from "react";
import Navbar from "./Navbar";
import "./Styles/Main.scss";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="main__header">
        <img src="icons/titleHarry.png" className="main__header--img" />
        <h2 className="main__header--title">Selecciona tu filtro</h2>
      </div>
    </div>
  );
};

export default App;
