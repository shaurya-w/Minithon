// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/Quiz";
import Quiz from "./pages/Quiz";
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
    </>
  );
};

export default App;
