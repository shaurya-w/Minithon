import React from "react";

const Contact = () => (
  <section id="Contact" style={{ ...styles.section }}>
    <h1>Contact</h1>
    <p>Welcome to the Contactpage.</p>
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

export default Contact;
