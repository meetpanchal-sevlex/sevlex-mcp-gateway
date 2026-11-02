"use client";

import React, { createContext, useContext, useEffect } from "react";

type Theme = "dark";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  isDark: true,
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Permanently lock into Dark Obsidian theme
    const root = document.documentElement;
    root.classList.add("dark");
    root.classList.remove("light");
    localStorage.setItem("sevlex-theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark", isDark: true, setTheme: () => {}, toggleTheme: () => {} }}>
      <div className="dark">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
