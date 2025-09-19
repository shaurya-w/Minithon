import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ActionPlan from "./ActionPlan";

const ResultsSection = ({ score }) => {
  const [displayScore, setDisplayScore] = useState(0);
  const [level, setLevel] = useState("");
  const [color, setColor] = useState("");
  const [tips, setTips] = useState([]);

  // ✅ Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Animate score counting up
  useEffect(() => {
    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * score);
      setDisplayScore(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [score]);

  // ✅ Determine impact level & tips
  useEffect(() => {
    if (score <= 30) {
      setLevel("Low Footprint 🌱");
      setColor("stroke-green-400 text-green-400");
      setTips([
        "Great job! Keep cycling or walking when possible.",
        "Share your practices with friends to inspire them.",
      ]);
    } else if (score <= 60) {
      setLevel("Moderate Footprint 🌍");
      setColor("stroke-yellow-400 text-yellow-400");
      setTips([
        "Consider reducing meat consumption.",
        "Switch to energy-efficient appliances.",
        "Try public transport twice a week.",
      ]);
    } else {
      setLevel("High Footprint 🔥");
      setColor("stroke-red-400 text-red-400");
      setTips([
        "Carpool or use public transport instead of solo driving.",
        "Unplug devices when not in use.",
        "Adopt a more plant-based diet.",
      ]);
    }
  }, [score]);

  // Circle properties
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (displayScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 space-y-8 m-25">
      {/* SVG Circular Progress */}
      <div className="relative w-48 h-48">
        <svg className="transform -rotate-90 w-48 h-48" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#374151"
            strokeWidth="12"
            fill="transparent"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            strokeWidth="12"
            fill="transparent"
            className={color.split(" ")[0]} // stroke color
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-white">{displayScore}</span>
        </div>
      </div>

      {/* Score Level */}
      <motion.h2
        className={`text-3xl font-semibold ${color.split(" ")[1]}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {level}
      </motion.h2>

      {/* Tips Section */}
      <div className="grid gap-4 max-w-md w-full">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded-xl shadow-lg text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
          >
            {tip}
          </motion.div>
        ))}
      </div>

      {/* ActionPlan */}
      <ActionPlan />
    </div>
  );
};

export default ResultsSection;
