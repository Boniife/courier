import React from "react";
import "./Bar.css";
import { Link } from "react-router-dom";
const Bar = () => {
  return (
    <div className="main-head">
      <ul className="main-list">
        <li>
          <Link to={"/"}>
            <h4>Home</h4>
          </Link>
        </li>
      </ul>
      <ul className="main-2list">
        <li>
          <Link to={"/about"}>
            <h4>About</h4>
          </Link>
        </li>
      </ul>
      <ul className="main-3list">
        <li>
          <Link to={"/register"}>
            <h4>Register</h4>
          </Link>
        </li>
      </ul>
      <ul className="main-4list">
        <li>
          <Link to={"/login"}>
            <h4>Login</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Bar;
