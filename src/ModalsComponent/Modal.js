import React, { useState } from "react";
import "../Styles/Modals.scss";
const Modal = ({ show, handleClose, setShow }) => {
  const [useForm, setUseForm] = useState({
    name: "",
    birthday: "",
    colourEyes: "",
    colorHair: " ",
    gender: " ",
    position: " ",
    files: null,
  });
  const [useFile, setUseFile] = useState(null);
  const showClassName = show ? "display-none" : " display-block";

  const handleModalContainerClick = (e) => e.stopPropagation();
  const onChange = (e) => {
    console.log(" e.target.value", e.target.value);
    setUseForm({ ...useForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  console.log(useForm.gender);
  console.log(useForm.position);
  return (
    <div>
      <div className={showClassName}>
        <div className="modalContainer" onClick={handleModalContainerClick}>
          <div className="modalContainerClose">
            <p className="modal-character">Agrega un personaje</p>{" "}
            <button className="modal-close" onClick={() => setShow(!show)}>
              X
            </button>
          </div>

          <form className="modalContainerForm" onSubmit={onSubmit}>
            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">NOMBRE</label>
              <input
                className="modalContainerFormInput"
                value={useForm.name}
                type="text"
                name="name"
                onChange={onChange}
              />
            </div>
            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">CUMPLEAÑOS</label>

              <input
                className="modalContainerFormInput"
                value={useForm.birthday}
                type="date"
                name="birthday"
                onChange={onChange}
              />
            </div>

            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">COLOR DE OJOS</label>

              <input
                className="modalContainerFormInput"
                value={useForm.colourEyes}
                type="text"
                name="colourEyes"
                onChange={onChange}
              />
            </div>

            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">COLOR DE PELO</label>

              <input
                className="modalContainerFormInput"
                value={useForm.colorHair}
                type="text"
                name="colorHair"
                onChange={onChange}
              />
            </div>

            <div className="modalContainerFormDivRadios">
              {" "}
              <p className="modalContainerFormP">GENERO</p>
              <div className="modalContainerFormDiv">
                <div className="modalContainerFormDivDiv">
                  <input
                    type="radio"
                    value="mujer"
                    name="gender"
                    onChange={onChange}
                  />
                  <label className="modalContainerFormText">Mujer</label>
                </div>
                <div className="modalContainerFormDivDiv">
                  <input
                    type="radio"
                    value="hombre"
                    name="gender"
                    onChange={onChange}
                  />
                  <label className="modalContainerFormText">Hombre</label>
                </div>
              </div>
            </div>
            <div className="modalContainerFormDivRadios">
              {" "}
              <p className="modalContainerFormP">POSICIÓN</p>
              <div className="modalContainerFormDiv">
                <div className="modalContainerFormDivDiv">
                  <input
                    type="radio"
                    value="estudiante"
                    name="position"
                    onChange={onChange}
                  />
                  <label className="modalContainerFormText">Estudiante</label>
                </div>
                <div className="modalContainerFormDivDiv">
                  <input
                    type="radio"
                    value="staff"
                    name="position"
                    onChange={onChange}
                  />
                  <label className="modalContainerFormText">Staff</label>
                </div>
              </div>
            </div>
            <div className="modalContainerFormFile">
              <p className="modalContainerFormFileP">FOTOGRAFÍA</p>
              <input
                type="file"
                value={useForm.files}
                name="files"
                onChange={(e) => setUseFile(e.target.files[0])}
              />
            </div>

            <div className="modalContainerButton">
              <button type="submit" className="modalContainerButtonDiv">
                GUARDAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
