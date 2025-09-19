/*import React from "react";

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
*/

import React from "react";

const QuizDiv = ({ question, options, category, qIndex, selected, handleSelect }) => {
  return (
    <div className="p-6 bg-gray-900/80 rounded-2xl shadow-xl border border-green-600 mb-8 w-full max-w-2xl backdrop-blur-sm">
      {/* Question */}
      <p className="text-lg font-semibold text-white mb-6 tracking-wide">
        {qIndex + 1}. {question}
      </p>

      {/* Options */}
      <div className="space-y-3">
        {options.map((opt, optIndex) => {
          const inputId = `${category}-${qIndex}-opt-${optIndex}`;
          return (
            <div key={optIndex} className="relative">
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
                className={`block px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ease-in-out border ${
                  selected === optIndex
                    ? "bg-green-600 text-white border-green-500 shadow-lg scale-[1.02]"
                    : "bg-gray-800/60 text-gray-200 border-gray-700 hover:bg-green-700/50 hover:border-green-500 hover:scale-[1.01]"
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
