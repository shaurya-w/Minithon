import React from "react";

const Results = () => (
  <section id="Results" style={{ ...styles.section }}>
    <h1>Results</h1>
    <p>Welcome to the Resultspage.</p>
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

export default Results;
