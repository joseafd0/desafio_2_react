import React from "react";
import "./Alert.css";

const Alert = ({ message, type }) => {
  return (
    <>
      <div className={`alert-${type}`}>
        <span>{message.text}</span>
      </div>
    </>
  );
};

export default Alert;
