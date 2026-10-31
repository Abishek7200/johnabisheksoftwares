"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode = "hybrid" | "dark" | "light";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "hybrid",
  setTheme: () => {},
  toggleTheme: () => {},
  isMounted: false,
});

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("hybrid");
  const [isMounted, setIsMounted] = useState(false);

  // Synchronize state before browser paint
  useIsomorphicLayoutEffect(() => {
    let saved: ThemeMode | null = null;
    try {
      saved = localStorage.getItem("ja_portfolio_theme") as ThemeMode | null;
    } catch (e) {}

    const docTheme = typeof document !== "undefined"
      ? (document.documentElement.getAttribute("data-theme") as ThemeMode | null)
      : null;

    const currentTheme = (saved && (saved === "hybrid" || saved === "dark" || saved === "light"))
      ? saved
      : (docTheme && (docTheme === "hybrid" || docTheme === "dark" || docTheme === "light"))
      ? docTheme
      : "hybrid";

    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
    setIsMounted(true);

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", currentTheme);
      document.documentElement.classList.remove("theme-hybrid", "theme-dark", "theme-light");
      document.documentElement.classList.add(`theme-${currentTheme}`);
      const isL = currentTheme === "light";
      const bg = isL ? "#f8fafc" : "#09090e";
      const text = isL ? "#0f172a" : "#f4f4f7";
      const cs = isL ? "light" : "dark";
      document.documentElement.style.setProperty("--page-bg", bg);
      document.documentElement.style.setProperty("--page-text", text);
      document.documentElement.style.backgroundColor = bg;
      document.documentElement.style.color = text;
      document.documentElement.style.colorScheme = cs;
    }
  }, []);

  useEffect(() => {
    // Enable transitions only after initial paint is completely settled
    const timer = setTimeout(() => {
      document.documentElement.classList.add("theme-ready");
      setIsMounted(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const handleSetTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    try {
      localStorage.setItem("ja_portfolio_theme", newTheme);
    } catch (e) {}

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", newTheme);
      document.documentElement.classList.remove("theme-hybrid", "theme-dark", "theme-light");
      document.documentElement.classList.add(`theme-${newTheme}`);
      const isL = newTheme === "light";
      const bg = isL ? "#f8fafc" : "#09090e";
      const text = isL ? "#0f172a" : "#f4f4f7";
      const cs = isL ? "light" : "dark";
      document.documentElement.style.setProperty("--page-bg", bg);
      document.documentElement.style.setProperty("--page-text", text);
      document.documentElement.style.backgroundColor = bg;
      document.documentElement.style.color = text;
      document.documentElement.style.colorScheme = cs;
    }
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
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
