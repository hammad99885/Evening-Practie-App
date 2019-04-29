import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#"> */}
        {/* Navbar */}
      {/* </a> */}
      
      <div className=" navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link to="/login" className="nav-link">login</Link> 
          </li>
          <li className="nav-item">
          <Link to="/register" className="nav-link">register</Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
