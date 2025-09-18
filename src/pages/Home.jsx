import React from "react";

const Home = () => (
  <section id="home" style={{ ...styles.section }}>
    <h1>Home</h1>
    <p>Welcome to the homepage.</p>
  </section>
);

const styles = {
  section: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },
};

export default Home;