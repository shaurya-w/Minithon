import React from "react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";
import { info } from "../data/info";

const About = () => {
  // Split info text into paragraphs (based on blank lines)
  const paragraphs = info.split("\n\n");

  return (
    <section id="about" style={{ ...styles.section }}>
      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SplitText text="What is Carbon Footprint? " />
      </motion.h1>

      {/* Info Text */}
      <div className="max-w-3xl space-y-6">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.2, duration: 0.8, ease: "easeOut" }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;

const styles = {
  section: {
    marginTop: "30px", 
    height: "100vh",
    width:"150vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    color: "white",
    padding: "4rem", // nice spacing from edges
    backgroundColor: "black", // optional: dark background for better readability
  },
};
