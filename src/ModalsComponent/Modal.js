import React, { useState } from "react";
import "../Styles/Modals.scss";
const Modal = ({ show, setShow }) => {
  const [useForm, setUseForm] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: " ",
    gender: " ",
    position: " ",
    files: null,
  });
  const [formErrors, setformErrors] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: " ",
    gender: " ",
    position: " ",
    files: null,
  });
  const [useFile, setUseFile] = useState(null);

  const showClassName = show ? "display-none" : " display-block";

  let urlStudents = " http://localhost:5008/students";
  let urlStaff = " http://localhost:5008/staff";
  let urlCharacter = " http://localhost:5008/character";

  const handleModalContainerClick = (e) => e.stopPropagation();
  const onChange = (e) => {
    setUseForm({ ...useForm, [e.target.name]: e.target.value });
  };

  const handleBlur = (event) => {
    switch (event.target.name) {
      case "name":
        formErrors.name = !event.target.value ? "Este campo es requerido" : "";
        setformErrors(formErrors);
        break;
      case "gender":
        formErrors.gender = !event.target.value
          ? "Este campo es requerido"
          : "";
        break;
      case "eyeColour":
        formErrors.eyeColour = !event.target.value
          ? "Este campo es requerido"
          : "";
        break;
      case "hairColour":
        formErrors.hairColour = !event.target.value
          ? "Este campo es requerido"
          : "";
        break;
      case "dateOfBirth":
        formErrors.dateOfBirth = !event.target.value
          ? "Selecciona una opción"
          : "";
        break;
      case "position":
        formErrors.position = !event.target.value
          ? "Selecciona una opción"
          : "";
        break;
      case "files":
        formErrors.files = !event.target.value ? "Sube una foto" : "";
        break;
    }
    setformErrors(formErrors);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const body = JSON.stringify({
      name: useForm.name,
      gender: useForm.gender,
      eyeColour: useForm.eyeColour,
      hairColour: useForm.hairColour,
      dateOfBirth: useForm.dateOfBirth,
      image: useFile,
      alive: true,
    });

    if (useForm.position === "estudiante") {
      fetch(urlStudents, {
        method: "POST",
        body,
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }
    if (useForm.position === "staff") {
      fetch(urlStaff, {
        method: "POST",
        body,
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }
    fetch(urlCharacter, {
      method: "POST",
      body,
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

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
                onBlur={handleBlur}
                className="modalContainerFormInput"
                value={useForm.name}
                type="text"
                name="name"
                onChange={onChange}
              />
              {formErrors.name && (
                <p className="modalContainerFormTitle">{formErrors.name} </p>
              )}
            </div>
            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">CUMPLEAÑOS</label>

              <input
                onBlur={handleBlur}
                className="modalContainerFormInput"
                value={useForm.dateOfBirth}
                type="date"
                name="dateOfBirth"
                onChange={onChange}
              />
              {formErrors.dateOfBirth && (
                <p className="modalContainerFormTitle">
                  {formErrors.dateOfBirth}
                </p>
              )}
            </div>

            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">COLOR DE OJOS</label>

              <input
                onBlur={handleBlur}
                className="modalContainerFormInput"
                value={useForm.eyeColour}
                type="text"
                name="eyeColour"
                onChange={onChange}
              />
              {formErrors.eyeColour && (
                <p className="modalContainerFormTitle">
                  {formErrors.eyeColour}
                </p>
              )}
            </div>

            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">COLOR DE PELO</label>

              <input
                onBlur={handleBlur}
                className="modalContainerFormInput"
                value={useForm.hairColour}
                type="text"
                name="hairColour"
                onChange={onChange}
              />
              {formErrors.hairColour && (
                <p className="modalContainerFormTitle">
                  {formErrors.hairColour}
                </p>
              )}
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
                </div>{" "}
              </div>{" "}
              {formErrors.gender && (
                <p className="modalContainerFormTitle">{formErrors.gender}</p>
              )}
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
                    onBlur={handleBlur}
                  />
                  <label className="modalContainerFormText">Estudiante</label>
                </div>
                <div className="modalContainerFormDivDiv">
                  <input
                    type="radio"
                    value="staff"
                    name="position"
                    onBlur={handleBlur}
                    onChange={onChange}
                  />
                  <label className="modalContainerFormText">Staff</label>
                </div>
                {formErrors.position && (
                  <p className="modalContainerFormTitle">
                    {formErrors.position}
                  </p>
                )}
              </div>
            </div>
            <div className="modalContainerFormFile">
              <p className="modalContainerFormFileP">FOTOGRAFÍA</p>
              <input
                onBlur={handleBlur}
                type="file"
                name="files"
                onChange={(e) => setUseFile(e.target.files[0].name)}
              />
            </div>
            {formErrors.files && (
              <p className="modalContainerFormTitle">{formErrors.files}</p>
            )}
            <div className="modalContainerButton">
              <button
                type="submit"
                className="modalContainerButtonDiv"
                onClick={() => setShow(!show)}
              >
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
