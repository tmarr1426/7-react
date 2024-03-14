import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  let theme = darkMode
    ? {
        background: "#121212",
        color: "white",
        outlineColor: "white",
    }
    : {
        background: "white",
        color: "black",
        outlineColor: "black",
      };

  return (
    <ThemeContext.Provider value={(darkMode, setDarkMode, theme)}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
