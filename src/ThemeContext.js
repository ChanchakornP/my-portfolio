import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);  // Update state
        document.documentElement.setAttribute("data-bs-theme", newTheme);  // Update global theme on <html> element
    };

    useEffect(() => {
        setTheme("dark");
        document.documentElement.setAttribute("data-bs-theme", "dark");
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
