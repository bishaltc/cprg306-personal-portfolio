import React from "react";
import Header from "./header/page";
import About from "./about/page";
import Contact from "./contact/page";
import Skill from "./skill/page";
import Project from "./project/page";

export default function Home() {
  return (
    <main>
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
