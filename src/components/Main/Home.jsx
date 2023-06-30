import React from "react";
import NavBar from "../Navbar/Navbar";
import Main from "./Main";
import Body from "./Body";
import Footer from "./Footer";
import Bar from "../Navbar/Bar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Bar />
      <Main />
      <Body />
      <Footer />
    </div>
  );
};
export default Home;
