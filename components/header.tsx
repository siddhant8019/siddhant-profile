"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-[#dae2e2] border-opacity-40 bg-[#f6f9f1] shadow-lg shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[44rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 h-[initial] -translate-x-1/2 py-0">
        <ul className="flex w-[40rem] items-center justify-center gap-8 text-[0.9rem] font-medium text-[#000000]/70">
          {links.map((link) => {
            const isActive =
              pathname === link.hash || (pathname === "/" && link.hash === "/");

            return (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-[#000000] transition",
                    {
                      "text-[#000000]": isActive,
                    }
                  )}
                  href={link.hash}
                >
                  {link.name}

                  {isActive && (
                    <motion.span
                      className="bg-[#dae2e2] rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex sm:hidden fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 w-full px-4 z-[1000]">
        <div className="flex w-full items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-base font-bold text-[#000000]">
            Look around
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-[#dae2e2] text-[#000000] hover:bg-[#dae2e2]/80 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-5 h-5" />
            ) : (
              <HiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm sm:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-[3.5rem] left-4 right-4 bg-[#f6f9f1] rounded-2xl shadow-lg border border-[#dae2e2] sm:hidden z-50"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="p-4 space-y-2">
                {links.map((link, index) => {
                  const isActive =
                    pathname === link.hash ||
                    (pathname === "/" && link.hash === "/");

                  return (
                    <motion.li
                      key={link.hash}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.hash}
                        onClick={closeMobileMenu}
                        className={clsx(
                          "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          {
                            "bg-[#dae2e2] text-[#000000]":
                              isActive,
                            "text-[#000000]/70 hover:bg-[#dae2e2]/50":
                              !isActive,
                          }
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
