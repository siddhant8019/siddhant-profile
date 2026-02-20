import React from "react";
import { portfolioData } from "@/lib/data";
import { BsLinkedin, BsGithub, BsMedium, BsFileEarmarkText } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[6px] bg-[#1a1a1a] text-white px-8 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Let's Build Something Amazing Together
              </p>
              <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold section-title text-white">
                Get in touch
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/80 max-w-md">
                Have an AI product idea or need help with intelligent systems? I'd love to hear about it.
              </p>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="mt-6 inline-flex items-center text-lg sm:text-xl text-white hover:text-white/90 transition-colors duration-500 ease-fluid border-b border-white/40 pb-1"
              >
                {portfolioData.contact.email}
              </a>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:text-white hover:border-white/50 transition-colors duration-500 ease-fluid"
                  aria-label="Email"
                >
                  <HiMail className="text-lg" />
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:text-white hover:border-white/50 transition-colors duration-500 ease-fluid"
                  aria-label="LinkedIn"
                >
                  <BsLinkedin className="text-lg" />
                </a>
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:text-white hover:border-white/50 transition-colors duration-500 ease-fluid"
                  aria-label="GitHub"
                >
                  <BsGithub className="text-lg" />
                </a>
                <a
                  href="https://medium.com/@siddhantnitin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:text-white hover:border-white/50 transition-colors duration-500 ease-fluid"
                  aria-label="Medium"
                >
                  <BsMedium className="text-lg" />
                </a>
              </div>
              <div className="text-sm sm:text-base text-white/80">
                Decision Systems Builder
              </div>
              <div className="flex gap-3">
                <a
                  href="/mail"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] text-sm font-medium bg-white text-[#1a1a1a] hover:bg-white/95 transition-colors duration-500 ease-fluid"
                >
                  Get in Touch
                </a>
                <a
                  href={portfolioData.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] text-sm font-medium border border-white/40 text-white hover:bg-white/10 transition-colors duration-500 ease-fluid"
                >
                  <BsFileEarmarkText className="w-4 h-4" />
                  View Resume
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs sm:text-sm text-white/70">
              <div className="flex flex-wrap items-center justify-center gap-5">
                <Link href="/" className="hover:text-white transition-colors duration-500 ease-fluid">
                  Home
                </Link>
                <Link
                  href="/work"
                  className="hover:text-white transition-colors duration-500 ease-fluid"
                >
                  Work
                </Link>
                <Link
                  href="/experience"
                  className="hover:text-white transition-colors duration-500 ease-fluid"
                >
                  Experience
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors duration-500 ease-fluid"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-500 ease-fluid"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-500 ease-fluid"
                >
                  Contact
                </Link>
              </div>
              <div className="text-center md:text-right">
                <p>&copy; 2025 Siddhant. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
