import React from "react";

const InputField = ({ type, name, onValueChange, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
        placeholder={`enter ${label}`}
        name={name}
        onChange={onValueChange}
      />
    </div>
  );
};

export default InputField;
