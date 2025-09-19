import React, { useState } from "react";
import QuizDiv from "../components/QuizDiv";
import Button from "../components/Button";
import { questions } from "../data/questions";

const Quiz = () => {
  const [answers, setAnswers] = useState({});

  const handleSelect = (category, qIndex, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [`${category}-${qIndex}`]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    console.log("User Answers:", answers);
    // Perform scoring or send results to another page
  };

  return (
    <section
      id="Quiz"
      className="min-h-screen flex flex-col items-center justify-center text-white scroll-mt-16 px-4 sm:px-[100px] py-10 bg-[url('/leafy-bg.jpg')] bg-cover bg-center"
    >
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

      <div className="mt-2">
        <Button onClick={handleSubmit} />
      </div>
    </section>
  );
};

export default Quiz;
