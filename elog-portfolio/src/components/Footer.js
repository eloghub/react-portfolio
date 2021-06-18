import React from "react";
import "../styles/Footer.css";

const styles = {
  footerStyle: {
    background: "green"
  },
  footingStyle: {
    fontSize: 100
  }
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <header style={styles.footerStyle} className="footer">
      <h1 style={styles.footingStyle}>© ELOGHUB 2021</h1>
    </header>
  );
}

export default Footer;
