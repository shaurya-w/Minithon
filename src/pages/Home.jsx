import React from "react";
import Spline from "@splinetool/react-spline";
import About from "./About";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); // ✅ must be inside the component

  const goToQuiz = () => {
    navigate("/quiz"); // ✅ navigate to the Quiz page
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full px-4 py-10 text-white bg-cover bg-center"
    >
      <About />

      <div className="w-full h-[600px]">
        <Spline scene="https://prod.spline.design/bOvpJV58xmvY03-F/scene.splinecode" />
      </div>

      <div className="mt-8">
        <Button onClick={goToQuiz} name="Take a quiz!" /> {/* ✅ pass the handler */}
      </div>
    </section>
  );
}
