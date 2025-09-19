import { motion } from "framer-motion";
import { Bike, Lightbulb } from "lucide-react";

const ActionPlan = () => {
  const actions = [
    {
      id: 1,
      title: "Switch to Sustainable Transport",
      description:
        "Use bikes, e-scooters, or public transport for short trips. Consider carpooling or electric vehicles.",
      category: "Transportation",
      icon: <Bike className="w-8 h-8 text-pink-400" />,
      impact: "HIGH IMPACT",
    },
    {
      id: 2,
      title: "Optimize Energy Usage",
      description:
        "Switch to LED bulbs, unplug devices, and consider renewable energy sources.",
      category: "Energy",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      impact: "HIGH IMPACT",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 text-center">
      <h2 className="text-4xl font-bold text-white">Your Action Plan</h2>
      <p className="mt-2 text-gray-300">
        You're on the right path! Focus on these high-impact changes:
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <motion.div
            key={action.id}
            className="relative p-6 rounded-2xl bg-[#0D1117] text-left border border-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 25px rgba(34,197,94,0.5)", // green glow
              borderColor: "rgba(34,197,94,0.7)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              {action.icon}
              <span className="text-xs px-3 py-1 rounded-full border border-green-500 text-green-400">
                {action.impact}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {action.title}
            </h3>
            <p className="text-gray-300 text-sm mb-3">{action.description}</p>
            <span className="text-green-400 text-sm font-medium">
              {action.category}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActionPlan;
