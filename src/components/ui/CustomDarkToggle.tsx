"use client";
import { useDarkMode } from '@/context/DarkModeContext';
import { Sun, Moon } from 'lucide-react';

export default function CustomDarkToggle() {
  const { dark, toggle } = useDarkMode();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggle}
        className="bg-transparent border-none p-0 m-0 focus:outline-none focus:ring-0 flex items-center justify-center"
        aria-label="Toggle dark mode"
        type="button"
      >
        {/* If currently light, show moon and 'Dark' (click to enable dark) */}
        {!dark ? (
          <>
            <Moon className="w-5 h-5 text-white" />
            <span className="text-xs md:text-sm font-semibold text-white dark:text-gray-200 select-none ml-2">
              Dark
            </span>
          </>
        ) : (
          <>
            <Sun className="w-5 h-5 text-white" />
            <span className="text-xs md:text-sm font-semibold text-white dark:text-gray-200 select-none ml-2">
              Light
            </span>
          </>
        )}
      </button>
    </div>
  );
}
