/*import React from "react";
import { motion, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <NavLink to="/" style={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={styles.link}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz" style={styles.link}>
            Quiz
          </NavLink>
        </li>
      </ul>

      <motion.div
        style={{
          ...styles.progressBar,
          scaleX: scrollYProgress,
        }}
      />
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#222",
    color: "white",
    zIndex: 1000,
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: "10px 20px",
    justifyContent: "space-around",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
  progressBar: {
    height: "2px",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    transformOrigin: "0%",
  },
};

export default Navbar;


import React from "react";
import { motion, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
      {/* Navigation Links *
      <ul className="flex justify-center md:justify-around items-center gap-8 py-4 px-6">
        {["Home", "About", "Quiz"].map((item, index) => (
          <li key={index}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-lg font-semibold transition duration-300 hover:text-emerald-400 ${
                  isActive ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : ""
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Scroll Progress Bar *
      <motion.div
        className="h-[3px] bg-gradient-to-r from-emerald-400 to-green-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};

export default Navbar;
*/

import React from "react";
import { motion, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
      {/* Navbar content */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* You can replace this with a logo if you want */}
        <h1 className="text-xl font-bold tracking-wide">🌱 EcoTrack</h1>

        {/* Navigation links on right */}
        <ul className="flex items-center gap-8">
          {["Home", "About", "Quiz"].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-semibold transition duration-300 hover:text-emerald-400 ${
                    isActive ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-emerald-400 to-green-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};

export default Navbar;
