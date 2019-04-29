import React from "react";
import InputField from "./InputField";

const FormGenrator = ({ inputChange, onSubmit, inputs }) => {
  const mapedInputs = inputs.map((input) => {
    return (
      <InputField key={input.uni}
        type={input.type}
        name={input.name}
        onValueChange={inputChange}
        label={input.label}
      />
    );
  });
  return (
    <form>
      {mapedInputs}
      <button type="submit" onClick={onSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormGenrator;
