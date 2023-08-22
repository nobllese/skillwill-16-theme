import React from "react";

function Header({ toggleTheme }) {
  return (
    <header>
      <h1>Dark Mode App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;
