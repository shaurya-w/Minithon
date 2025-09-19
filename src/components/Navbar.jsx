import React from "react";
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
