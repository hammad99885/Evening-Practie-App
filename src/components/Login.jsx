import React, { Component } from "react";
import FormGenrator from "./common/FormGenrator";
import { connect } from "react-redux";
import { onInputChange } from "../actions";
// impor {}
// connect

class Login extends Component {
  // state = {
  //   email: "",
  //   password: "",
  //   data: "ahsdklhaskhdlkashdkljaslkjdklasjdljaslkd"
  // };

  // onInputChange = e => {
  //   let name = e.target.name;
  //   console.log(e.target.value);
  //   this.setState({ [name]: e.target.value });
  // };

  // onSubmit = e => {
  //   e.preventDefault();
  //   let dataToSubmit = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  // };

  inputs = [
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
    // console.log(this.props)
    console.log(this.props)
    return (
      <div className="container mt-5">
        <h1>Sign In</h1>
        <div className="row ">
          {/* {this.state.data} */}
          <FormGenrator
            inputChange={this.props.onInputChange}
            // onSubmit={this.onSubmit}
            inputs={this.inputs}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password
  };
};
export default connect(
  mapStateToProps,
  { onInputChange }
)(Login);
