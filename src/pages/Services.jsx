import React from "react";

const Services = () => (
  <section id="Services" style={{ ...styles.section }}>
    <h1>Services</h1>
    <p>Welcome to the Servicespage.</p>
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

export default Services;
