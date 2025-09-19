import React from "react";

const QuizDiv = ({ question, options, category, qIndex, selected, handleSelect }) => {
  return (
    <div className="p-6 bg-black/60 rounded-xl shadow-lg border border-green-700 mb-6 w-full max-w-2xl">
      <p className="text-md font-semibold text-white mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((opt, optIndex) => {
          const inputId = `${category}-${qIndex}-opt-${optIndex}`;
          return (
            <div key={optIndex}>
              <input
                type="radio"
                id={inputId}
                name={`${category}-${qIndex}`}
                value={optIndex}
                checked={selected === optIndex}
                onChange={() => handleSelect(category, qIndex, optIndex)}
                className="hidden"
              />
              <label
                htmlFor={inputId}
                className={`block p-2 pl-3 rounded-lg cursor-pointer transition ${
                  selected === optIndex
                    ? "bg-green-700 text-white"
                    : "bg-white/10 text-gray-200 hover:bg-green-800/70"
                }`}
              >
                {opt}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizDiv;
