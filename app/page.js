import React from "react";
import Header from "./header/page";
import About from "./about/page";
import Skill from "./skill/page";
import Contact from "./contact/page";
export default function Home() {
  return (
   
  <main >
    <h1  className="font-bold"> personal-portfolio</h1>

    <h2> hello</h2>
  <Header/>
  <About/>
 <Skill/>
 <Contact/>
  </main>
  )
};