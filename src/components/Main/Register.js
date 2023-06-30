import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "./Footer";
import Bar from "../Navbar/Bar";
import "./Register.css";
const Register = () => {
  return (
    <div>
      <NavBar />
      <Bar />
      <div className="register-page">
        <h3>Blue Dart Registration</h3>
        <p>
          E-mail:
          <input type="text" placeholder="E-mail"></input>
        </p>
        <p>
          Username:
          <input type="text" placeholder="username"></input>
        </p>
        <p>
          Password:
          <input type="password" placeholder="Password"></input>
        </p>
        <button className="input-register">Sign up</button>
        <h4>Already Have An Account? Sign In Here.</h4>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
