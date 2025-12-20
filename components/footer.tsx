import React from "react";
import { portfolioData } from "@/lib/data";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-[#000000] mb-2">
              Siddhant Patil
            </h3>
            <p className="text-sm text-[#000000]/70">
              AI Engineer and Product Guy
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-[#000000]/70 hover:text-[#000000] transition-colors"
              aria-label="Email"
            >
              <HiMail className="text-xl" />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000]/70 hover:text-[#000000] transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="text-xl" />
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000]/70 hover:text-[#000000] transition-colors"
              aria-label="GitHub"
            >
              <BsGithub className="text-xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#dae2e2] pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#000000]/70">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="hover:text-[#000000] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/work"
                className="hover:text-[#000000] transition-colors"
              >
                Work
              </Link>
              <Link
                href="/experience"
                className="hover:text-[#000000] transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/blog"
                className="hover:text-[#000000] transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="hover:text-[#000000] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#000000] transition-colors"
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
    </footer>
  );
}
