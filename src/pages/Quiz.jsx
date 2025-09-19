import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizDiv from "../components/QuizDiv";
import Button from "../components/Button";
import { questions } from "../data/questions";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (category, qIndex, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [`${category}-${qIndex}`]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    const categoryScores = {};
    let totalScore = 0;

    // ✅ Calculate scores
    Object.entries(questions).forEach(([category, qs]) => {
      categoryScores[category] = 0;
      qs.forEach((_, qIndex) => {
        const selectedOption = answers[`${category}-${qIndex}`];
        if (selectedOption !== undefined) {
          const points = selectedOption + 1; // 1st option = 1, 4th = 4
          categoryScores[category] += points;
          totalScore += points;
        }
      });
    });

    const result = { totalScore, categoryScores };
    localStorage.setItem("quizResult", JSON.stringify(result));

    // 👉 Don't rely on console here (page will unmount)
    navigate("/results");
  };

  return (
    <section
      id="Quiz"
      className="min-h-screen w-full px-4 py-10 text-white scroll-mt-16 bg-[url('/leafy-bg.png')] bg-cover bg-center"
    >
      <h2 className="font-bold text-2xl text-center m-5">
        Take the quiz to find out your carbon footprint!
      </h2>

      <div className="flex flex-col items-center gap-6">
        {Object.entries(questions).map(([category, qs]) =>
          qs.map((q, qIndex) => (
            <QuizDiv
              key={`${category}-${qIndex}`}
              question={q.question}
              options={q.options}
              category={category}
              qIndex={qIndex}
              selected={answers[`${category}-${qIndex}`]}
              handleSelect={handleSelect}
            />
          ))
        )}
      </div>

      <div className="mt-8">
        <Button onClick={handleSubmit} name="Submit" />
      </div>
    </section>
  );
};

export default Quiz;
