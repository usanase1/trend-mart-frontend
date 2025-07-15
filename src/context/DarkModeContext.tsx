"use client";
import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext({
  dark: false,
  toggle: () => {},
});

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("darkMode");
      if (stored === "true") setDark(true);
      if (stored === "false") setDark(false);
    }
  }, []);

  // Update <html> class and localStorage on change
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <DarkModeContext.Provider value={{ dark, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
} 