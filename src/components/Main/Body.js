import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div>
      <h4 className="tracking">Insert Tracking Code Below</h4>
      <div className="inputs">
        <input
          placeholder="Tracking code"
          type="text"
          className="input-body"
        ></input>
        <br></br>
        <Link to="/track">
          <button className="button">Track</button>
        </Link>
      </div>
      <br></br>
      <br></br>
      <section className="body-section">
        <h2>TAKE LOOK AT </h2>
        <h2 className="body-text">our Service Coverages</h2>
        <h2 className="body-bottom-text">
          Expres Movers llc Service is a one-stop freight and Courier solution,
          providing services to companies through
        </h2>
      </section>
      <section className="para-text">
        <p className="para-text1">PARTNERSHIP</p>
        <p className="para-text3">trusted by more than 150+ big companies</p>
        <p className="para-text4">get discounts up to 40%</p>
        <Link to={"/"}>
          <h4>Home</h4>
        </Link>
        <Link to={"/about"}>
          <h4>About us</h4>
        </Link>
        <h4>E-mail us: Blue-Dart@info.com</h4>
      </section>
    </div>
  );
};
export default Body;
