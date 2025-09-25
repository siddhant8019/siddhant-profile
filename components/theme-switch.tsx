"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 sm:top-5 sm:bottom-auto z-[999] w-[3rem] h-[3rem] bg-[#f6f9f1] dark:bg-[#231f1f] border border-[#dae2e2] dark:border-[#797d59]/40 shadow-sm rounded-full flex items-center justify-center hover:shadow-md hover:scale-110 active:scale-105 transition-all duration-300 ease-in-out"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun className="text-[#000000] w-5 h-5" />
      ) : (
        <BsMoon className="text-[#797d59] w-5 h-5" />
      )}
    </button>
  );
}
