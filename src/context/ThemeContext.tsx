"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode = "hybrid" | "dark" | "light";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "hybrid",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("hybrid");

  useEffect(() => {
    const saved = localStorage.getItem("ja_portfolio_theme") as ThemeMode | null;
    if (saved && (saved === "hybrid" || saved === "dark" || saved === "light")) {
      setTheme(saved);
    }
  }, []);

  const handleSetTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    localStorage.setItem("ja_portfolio_theme", newTheme);
  };

  const toggleTheme = () => {
    const cycle: Record<ThemeMode, ThemeMode> = {
      hybrid: "dark",
      dark: "light",
      light: "hybrid",
    };
    handleSetTheme(cycle[theme]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme }}>
      <div data-theme={theme} className={`theme-${theme} min-h-screen transition-colors duration-500`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

