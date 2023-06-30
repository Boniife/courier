import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "./Footer";
import Bar from "../Navbar/Bar";
import "./About.css";
const About = () => {
  return (
    <div>
      <NavBar />
      <Bar />
      <div className="about-page">
        <p>
          name
          <input type="password" placeholder="name"></input>
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default About;
