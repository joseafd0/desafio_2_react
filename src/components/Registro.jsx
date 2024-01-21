import React from "react";
import { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import "./Registro.css";

const Registro = () => {
  const [message, setMessage] = useState({
    text: "Completa todos los campos!",
    type: "danger",
  });
  const onSubmit = (name, email, password) => {
    setMessage({ text: "REGISTRO EXITOSO", type: "success" });
  };
  return (
    <>
      <div className="container">
        <div className="container-caja">
          <h1>Crea una cuenta</h1>
          <div className="caja-logos">
            <SocialButton logo="facebook" />
            <SocialButton logo="github" />
            <SocialButton logo="linkedin" />
          </div>
          <p>O usa tu email para registrarte</p>
          <Formulario onSubmit={onSubmit} />
          <Alert message={message} type={message.type} />
        </div>
      </div>
    </>
  );
};

export default Registro;
