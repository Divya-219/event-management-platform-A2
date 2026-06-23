import { createContext,useState,useEffect} from "react";

export const ThemeContext =createContext();

function ThemeProvider({ children }) {
const [theme, setTheme] =useState( localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className =  theme;
localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);

  function toggleTheme() {

    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    );

  }

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>

  );

}

export default ThemeProvider;