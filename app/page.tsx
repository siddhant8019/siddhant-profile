import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedProject from "@/components/featured-project";
import ProjectPreview from "@/components/project-preview";
import Blog from "@/components/blog";
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <section className="mb-12 sm:mb-20 px-4 w-full">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.1fr,0.9fr] items-center glass-card card-ambient p-6 sm:p-8 rounded-3xl">
          <div className="text-left">
            <p className="text-base sm:text-lg text-[#222222] leading-relaxed">
              {portfolioData.home.positioning.lineOne}
            </p>
            <p className="text-base sm:text-lg text-[#222222]/80 leading-relaxed mt-3">
              {portfolioData.home.positioning.lineTwo}
            </p>
          </div>
          <div className="relative w-full h-[170px] sm:h-[200px] lg:h-[220px]">
            <Image
              src="/system-flow.svg"
              alt="System flow diagram"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      <section className="mb-12 sm:mb-20 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-6 text-[#222222] section-title">
            How I approach AI systems
          </h2>
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] items-center glass-card card-ambient p-6 sm:p-8 rounded-3xl">
            <ul className="space-y-2.5 text-sm sm:text-base text-[#222222]/85">
              {portfolioData.home.thinkingBullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="relative w-full h-[190px] sm:h-[220px]">
              <Image
                src="/evaluation-report.svg"
                alt="Evaluation report card"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <ProjectPreview />
      <section className="mb-16 sm:mb-24 px-4 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-3 text-[#222222] section-title">
            Tools I actually use
          </h2>
          <p className="text-sm sm:text-base text-[#222222]/70 mb-6">
            I pick tools based on failure modes, not hype.
          </p>
          <div className="glass-card card-ambient p-8 sm:p-10 rounded-3xl">
            <div className="space-y-4 text-sm sm:text-base text-[#222222]/85">
              {portfolioData.home.toolGroups.map((group) => (
                <div key={group.label} className="flex flex-col sm:flex-row sm:items-start sm:gap-3">
                  <span className="min-w-[140px] font-semibold text-[#222222]">
                    {group.label}:
                  </span>
                  <span>{group.items.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Services />
      <FeaturedProject />
      <Blog />
      <section className="mb-16 sm:mb-24 px-4 w-full">
        <div className="max-w-4xl mx-auto glass-card card-ambient p-8 sm:p-10 rounded-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#222222] section-title">
            About
          </h2>
          <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed mb-6">
            {portfolioData.home.aboutTeaser}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 btn-secondary btn-advanced px-5 py-2.5 rounded-full text-sm sm:text-base"
          >
            More about how I work →
          </Link>
        </div>
      </section>
      <section className="mb-16 sm:mb-24 px-4 w-full">
        <div className="max-w-4xl mx-auto glass-card card-ambient p-8 sm:p-10 rounded-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#222222] section-title">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed mb-6">
            If you’re building something where AI failure is expensive, we should talk.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-base">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-2 text-[#222222] hover:underline"
            >
              Email
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#222222] hover:underline"
            >
              GitHub
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#222222] hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
