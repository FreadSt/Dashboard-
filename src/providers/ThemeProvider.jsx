import ThemeContext from "./ThemeContext.js";
import React, {useState, useEffect, useContext} from "react";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.dataset.theme = theme;
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
          {children}
      </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);