import React from "react";
import "./Login.css";
import NavBar from "../Navbar/Navbar";
import Footer from "./Footer";
import Bar from "../Navbar/Bar";
const Login = () => {
  return (
    <div>
      <NavBar />
      <Bar />
      <div className="login-page">
        <h3>!Blue Dart Members Login</h3>
        <p>
          E-mail:
          <input type="text" placeholder="E-mail"></input>
        </p>
        <p>
          Password:
          <input type="password" placeholder="Password"></input>
        </p>
        <button className="input-login">Login</button>
        <p> remember me on this device</p>
        <p>forgot your password?</p>
        <p> Not a member yet</p>
        <button className="input-account"> create a free account</button>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
