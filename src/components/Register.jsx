import React, { Component } from "react";
import FormGenrator from "./common/FormGenrator";

class Register extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    password: ""
  };
  onInputChange = e => {
    let name = e.target.name;
    // console.log(e.target.value);
    this.setState({ [name]: e.target.value });
    // console.log(e.target.name)
    // console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    let dataToSubmit = {
      fname: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      password: this.state.password
    };
  };

  inputs = [
    {
      type: "text",
      name: "fName",
      label: "First Name",
      uni: "wqyuteasd"
    },
    {
      type: "text",
      name: "lName",
      label: "Last Name",
      uni: "wqyutesasd"
    },
    {
      type: "email",
      name: "email",
      label: "E-mail",
      uni: "wqyute"
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      uni: "asdhgaj"
    }
  ];
  render() {
    return (
      <div className="container mt-5">
        <h1>Register</h1>
        <div className="row ">
          {/* {this.state.data} */}
          <FormGenrator
            inputChange={this.onInputChange}
            onSubmit={this.onSubmit}
            inputs={this.inputs}
          />
        </div>
      </div>
    );
  }
}

export default Register;
