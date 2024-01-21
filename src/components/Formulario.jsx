import React from "react";
import { useState } from "react";
import Alert from "./Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Alert.css";
import "./Formulario.css";

const Formulario = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setMessage({ text: "POR FAVOR LLENAR TODOS LOS CAMPOS", type: "danger" });
      return;
    }
    if (!email.includes("@")) {
      setMessage({
        text: "POR FAVOR INGRESE UN CORREO VALIDO",
        type: "danger",
      });
      return;
    }
    if (password !== confirmPassword) {
      setMessage({ text: "LAS CONTRASEÑAS NO CUADRAN", type: "danger" });
      return;
    }
    setMessage({ text: "REGISTRO EXITOSO", type: "success" });
    onSubmit(name, email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="name" className="visually-hidden">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
        </div>

        <div className="form-field">
          <label htmlFor="email" className="visually-hidden">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            placeholder="tuemail@ejemplo.com"
          />
        </div>

        <div className="form-field">
          <label htmlFor="password" className="visually-hidden">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Contraseña"
          />
        </div>

        <div className="form-field">
          <label htmlFor="confirmPassword" className="visually-hidden">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirma tu contraseña"
          />
        </div>
        <button className="boton-registro" type="submit">Registrarse</button>
      </form>
      <Alert message={message} />
    </>
  );
};

export default Formulario;
