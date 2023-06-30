import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import Track from "./components/Track/Track";
import About from "./components/Main/About";
import Login from "./components/Main/Login";
import Register from "./components/Main/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/track" exact Component={Track} />
        <Route path="/about" exact Component={About} />
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
      </Routes>
    </Router>
  );
}

export default App;
