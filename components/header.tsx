"use client";

import React, { useState } from "react";
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
      <div className="fixed top-0 left-0 w-full border-b border-[#7B7B7B]/20 bg-[#F8F8F8]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xs sm:text-base font-semibold tracking-[0.35em] uppercase text-[#222222]"
          >
            Siddhant
          </Link>

          <nav className="hidden sm:flex">
            <ul className="flex items-center gap-10 text-sm sm:text-base font-medium tracking-wide text-[#222222]/70">
              {links.map((link) => {
                const isActive =
                  pathname === link.hash ||
                  (pathname === "/" && link.hash === "/");

                return (
                  <li key={link.hash}>
                    <Link
                      className={clsx("nav-link hover:text-[#222222]", {
                        "is-active text-[#222222]": isActive,
                      })}
                      href={link.hash}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/contact"
            className="hidden sm:inline-flex text-sm sm:text-base text-[#222222]/70 hover:text-[#222222] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="flex sm:hidden fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 w-full px-6 z-[1000]">
        <div className="flex w-full items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-xs font-semibold tracking-[0.35em] uppercase text-[#222222]">
            Siddhant
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-[#7B7B7B]/20 text-[#222222] hover:bg-[#7B7B7B]/30 transition-colors"
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
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#222222]/15 backdrop-blur-sm sm:hidden z-40"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-[3.5rem] left-4 right-4 glass-card rounded-2xl sm:hidden z-50">
            <ul className="p-4 space-y-2">
              {links.map((link) => {
                const isActive =
                  pathname === link.hash ||
                  (pathname === "/" && link.hash === "/");

                return (
                  <li key={link.hash}>
                    <Link
                      href={link.hash}
                      onClick={closeMobileMenu}
                      className={clsx(
                        "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        {
                          "bg-[#7B7B7B]/20 text-[#222222]": isActive,
                          "text-[#222222]/70 hover:bg-[#7B7B7B]/15":
                            !isActive,
                        }
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
