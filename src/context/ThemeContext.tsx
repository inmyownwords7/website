import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {/* Apply the 'dark' class dynamically */}
            <div className={darkMode ? "dark" : ""}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
