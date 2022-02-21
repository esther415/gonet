import React, { useState,useEffect } from "react";
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

  const [useFile, setUseFile] = useState(null);

  const showClassName = show ? "display-none" : " display-block";

  let urlCharacter = " http://localhost:5008/character";

  const handleModalContainerClick = (e) => e.stopPropagation();
  const onChange = (e) => {
    setUseForm({ ...useForm, [e.target.name]: e.target.value });
  };


  const onSubmit = async (event) => {
    let body;
    event.preventDefault();
    if (useForm.position === "estudiante") {
      body = JSON.stringify({
        name: useForm.name,
        gender: useForm.gender,
        eyeColour: useForm.eyeColour,
        hairColour: useForm.hairColour,
        dateOfBirth: useForm.dateOfBirth,
        image: useFile,
        alive: true,
        hogwartsStudent: true,
        hogwartsStaff: false,
      });
    }
    else {
      body = JSON.stringify({
        name: useForm.name,
        gender: useForm.gender,
        eyeColour: useForm.eyeColour,
        hairColour: useForm.hairColour,
        dateOfBirth: useForm.dateOfBirth,
        image: useFile,
        alive: true,
        hogwartsStudent: false,
        hogwartsStaff: true,
      });
    }

    fetch(urlCharacter, {
      method: "POST",
      body,
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

useEffect(()=>{
useForm.name=''
useForm.gender=''
useForm.eyeColour=''
useForm.hairColour=''
useForm.dateOfBirth=''
useForm.position=''
setUseForm(useForm)
setUseFile('')
},[ ])
  return (
    <div>
      <div className={showClassName}>
        <div className="modalContainer" onClick={handleModalContainerClick}>
          <div className="modalContainerClose">
            <p className="modal-character" data-cy="modal-isVisible">Agrega un personaje</p>{" "}
            <button className="modal-close" onClick={() => setShow(!show)}>
              X
            </button>
          </div>

          <form className="modalContainerForm" onSubmit={onSubmit}>
            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">NOMBRE</label>
              <input
               data-cy="modal-name"
        
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
                    data-cy="modal-dateOfBirth"
        
                className="modalContainerFormInput"
                value={useForm.dateOfBirth}
                type="date"
                name="dateOfBirth"
                onChange={onChange}
              />
            
            </div>

            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">COLOR DE OJOS</label>

              <input
                              data-cy="modal-eyeColour"
        
                className="modalContainerFormInput"
                value={useForm.eyeColour}
                type="text"
                name="eyeColour"
                onChange={onChange}
              />
           
            </div>

            <div className="modalContainerFormDiv">
              <label className="modalContainerFormText">COLOR DE PELO</label>

              <input
                      data-cy="modal-hairColour"
        
                className="modalContainerFormInput"
                value={useForm.hairColour}
                type="text"
                name="hairColour"
                onChange={onChange}
              />
            
            </div>

            <div className="modalContainerFormDivRadios">
              {" "}
              <p className="modalContainerFormP">GENERO</p>
              <div className="modalContainerFormDiv">
                <div className="modalContainerFormDivDiv">
                  <input
                        data-cy="modal-gender"
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
            
                         data-cy="modal-position"
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
                name="files"
                onChange={(e) => setUseFile(e.target.files[0].name)}
              />
            </div>
           
            <div className="modalContainerButton">
              <button
              data-cy="submit"
                type="submit"
                className="modalContainerButtonDiv"
                onClick={() =>   setShow(!show)}
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
