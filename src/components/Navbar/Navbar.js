import React from "react";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div>
      <header className="head">
        <img
          src={require("../Main/images/home-logo.jpg")}
          alt="logo"
          className="bar-logo"
        />
        <h2 className="headies">BLUE </h2>
        <h3 className="header">DART</h3>
      </header>
    </div>
  );
};
export default NavBar;
