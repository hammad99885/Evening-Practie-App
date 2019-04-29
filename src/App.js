import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;


// ()=>{
//   asdkjsadhka
//   return test

//   sadbjahsgkd
//   asjkdhaskjdhkajdhkj
// }