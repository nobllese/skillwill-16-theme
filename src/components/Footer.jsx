import React from "react";

function Footer({ theme, width }) {
  return (
    <footer>
      <p>Current theme: {theme}</p>
      <p>Window width: {width}</p>
    </footer>
  );
}

export default Footer;
