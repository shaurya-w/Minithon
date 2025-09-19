// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ResultsSection from "./pages/ResultsSection";
import ActionPlan from "./pages/ActionPlan";
import { Bike, Lightbulb } from "lucide-react";

const App = () => {
   const score = 55;
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

      <div className="min-h-screen bg-[#0A192F] flex items-center justify-center">
        <ResultsSection score={score} />
      </div>

      <ActionPlan/>
      
    </>
  );
};

export default App;
