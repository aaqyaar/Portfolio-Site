import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import MyWork from "../pages/MyWork";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
function Main() {
  return (
    <div className="">
      <div>
        <Home />
        <About />
        <MyWork />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default Main;
