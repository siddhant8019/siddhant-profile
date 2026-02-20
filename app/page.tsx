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
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.1fr,0.9fr] items-center glass-card card-ambient p-6 sm:p-8 rounded-[6px]">
          <div className="text-left">
            <p className="text-base sm:text-lg text-[#1a1a1a] leading-relaxed">
              {portfolioData.home.positioning.lineOne}
            </p>
            <p className="text-base sm:text-lg text-[#1a1a1a]/80 leading-relaxed mt-3">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-6 text-[#1a1a1a] section-title">
            How I approach AI systems
          </h2>
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] items-center glass-card card-ambient p-6 sm:p-8 rounded-[6px]">
            <ul className="space-y-2.5 text-sm sm:text-base text-[#1a1a1a]/85">
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
      <Services />
      <FeaturedProject />
      <Blog />
    </main>
  );
}
