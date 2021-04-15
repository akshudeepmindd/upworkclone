import React from "react";
import Hero from "./HeroSection";
import Projects from "./Projects";
import Partners from "./Partners";
import Pricing from "./Pricing";
import Navbar from "../components/Navbar"

export default () => {
  return (
    <>
      <Navbar>
        <Hero />
        <Projects />
        <Partners />
        <Pricing />
      </Navbar>
    </>
  );
};
