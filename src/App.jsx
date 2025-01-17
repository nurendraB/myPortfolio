// src/App.jsx
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills"; // Import the Skills component
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeScene from "./components/ThreeScene";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Services from "./components/Services";
import CybersecurityServices from "./components/CybersecurityServices";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ThreeScene />
      <About />
      <Projects />
      <Achievements />
      <Skills /> {/* Render the Skills component */}
      <CybersecurityServices />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
