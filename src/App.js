import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
      </Router>
    </>
  );
};

export default App;
