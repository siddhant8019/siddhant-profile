import React from "react";
import { portfolioData } from "@/lib/data";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-[#111111] text-[#F8F8F8] px-8 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#F8F8F8]/60">
                Let's
              </p>
              <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold section-title text-[#F8F8F8]">
                Get in touch
              </h2>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="mt-6 inline-flex items-center text-lg sm:text-xl text-[#F8F8F8]/80 hover:text-[#F8F8F8] transition-colors border-b border-[#F8F8F8]/30 pb-1"
              >
                {portfolioData.contact.email}
              </a>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="h-10 w-10 rounded-full border border-[#F8F8F8]/20 flex items-center justify-center text-[#F8F8F8]/70 hover:text-[#F8F8F8] hover:border-[#F8F8F8]/50 transition-colors"
                  aria-label="Email"
                >
                  <HiMail className="text-lg" />
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-[#F8F8F8]/20 flex items-center justify-center text-[#F8F8F8]/70 hover:text-[#F8F8F8] hover:border-[#F8F8F8]/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <BsLinkedin className="text-lg" />
                </a>
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-[#F8F8F8]/20 flex items-center justify-center text-[#F8F8F8]/70 hover:text-[#F8F8F8] hover:border-[#F8F8F8]/50 transition-colors"
                  aria-label="GitHub"
                >
                  <BsGithub className="text-lg" />
                </a>
              </div>
              <div className="text-sm sm:text-base text-[#F8F8F8]/60">
                Decision Systems Builder
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#F8F8F8]/15 pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs sm:text-sm text-[#F8F8F8]/60">
              <div className="flex flex-wrap items-center justify-center gap-5">
                <Link href="/" className="hover:text-[#F8F8F8] transition-colors">
                  Home
                </Link>
                <Link
                  href="/work"
                  className="hover:text-[#F8F8F8] transition-colors"
                >
                  Work
                </Link>
                <Link
                  href="/experience"
                  className="hover:text-[#F8F8F8] transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-[#F8F8F8] transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="hover:text-[#F8F8F8] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-[#F8F8F8] transition-colors"
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
