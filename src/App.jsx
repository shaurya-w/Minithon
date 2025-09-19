// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import ResultsSection from "./pages/ResultsSection";


const App = () => {
  const score=55;
  return (
    
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<ResultsSection score={score} />} />
      </Routes>
    </>
  );
};

export default App;
