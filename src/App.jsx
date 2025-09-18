// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Each page wrapped in a section with id */}
      <section id="home" className="scroll-mt-16">
        <Home />
      </section>

      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      <section id="services" className="scroll-mt-16">
        <Services />
      </section>

      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </>
  );
};

export default App;
