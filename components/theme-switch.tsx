"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 sm:top-5 sm:bottom-auto z-[999] w-[3rem] h-[3rem] bg-white dark:bg-gray-800 backdrop-blur-[0.5rem] border border-gray-200 dark:border-gray-700 shadow-sm rounded-full flex items-center justify-center hover:shadow-md dark:hover:shadow-gray-900/30 hover:scale-110 active:scale-105 transition-all duration-300 ease-in-out"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun className="text-gray-700 w-5 h-5" />
      ) : (
        <BsMoon className="text-gray-300 w-5 h-5" />
      )}
    </button>
  );
}
