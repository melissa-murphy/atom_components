import React, { useState } from "react";

// Create theme context/state with toggle

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  // default state
  const [theme, setTheme] = useState("dark");
  //   switch state
  const toggleTheme = (theme) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
