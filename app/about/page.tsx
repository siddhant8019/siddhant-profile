import { portfolioData } from "@/lib/data";
import Image from "next/image";
import { BsFileEarmarkText } from "react-icons/bs";

export default function About() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4 section-title">
          About Me
        </h1>
        <p className="text-lg sm:text-xl text-[#222222]/70 leading-relaxed">
          Building AI products that matter
        </p>
      </div>

      {/* Hero Bio Section */}
      <div className="glass-card card-ambient p-9 rounded-3xl mb-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <Image
                src="/profile.png"
                alt="Siddhant Patil"
                fill
                className="rounded-2xl object-cover border-2 border-[#7B7B7B]/30"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-base sm:text-lg lg:text-xl text-[#222222] leading-relaxed mb-6">
              {portfolioData.about.bio}
            </p>

            <div className="border-l-4 border-[#7B7B7B]/30 pl-6">
              <p className="text-base sm:text-lg font-medium text-[#222222] mb-2">
                My Mission
              </p>
              <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed">
                {portfolioData.about.mission}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {portfolioData.about.stats.map((stat, index) => (
          <div
            key={index}
            className="text-center glass-card card-hover card-ambient p-7 rounded-2xl"
          >
            <div className="text-3xl font-bold text-[#222222] mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-[#222222]/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Approach Section */}
      <div className="glass-card card-ambient p-9 rounded-3xl mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-4 section-title">
          My Approach
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#222222]/80 leading-relaxed">
          {portfolioData.about.approach}
        </p>
      </div>

      {/* Strengths Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-8 text-center section-title">
          Core Strengths
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.about.strengths.map((strength, index) => (
            <div
              key={index}
              className="glass-card card-hover card-ambient p-7 rounded-2xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#222222] mb-3">
                {strength.title}
              </h3>
              <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>

          {/* Interests, Tools & Personality Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Interests */}
            <div className="glass-card card-hover card-ambient p-7 rounded-2xl">
              <h2 className="text-lg sm:text-xl font-semibold text-[#222222] mb-6">
                What I'm Passionate About
              </h2>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-[#7B7B7B]/15 text-[#222222] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7B7B7B]/25 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass-card card-hover card-ambient p-7 rounded-2xl">
              <h2 className="text-lg sm:text-xl font-semibold text-[#222222] mb-6">
                Technologies I Love
              </h2>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-[#7B7B7B]/15 text-[#222222] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7B7B7B]/25 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Personality */}
            <div className="glass-card card-hover card-ambient p-7 rounded-2xl">
              <h2 className="text-lg sm:text-xl font-semibold text-[#222222] mb-6">
                Behind the Code
              </h2>
              <div className="space-y-3">
                {portfolioData.personality.map((trait, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[#F8F8F8] rounded-xl border border-[#7B7B7B]/20 hover:bg-[#FFFFFF] transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
                    <span className="text-sm text-[#222222]/80">
                      {trait}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

      {/* Call to Action */}
      <div className="mt-12 text-center bg-[#222222] p-10 rounded-3xl border border-[#7B7B7B]/30">
        <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] mb-4 section-title">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-sm sm:text-base text-[#FFFFFF]/80 mb-6 leading-relaxed">
          Have an AI product idea or need help with intelligent systems? I'd
          love to hear about it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/mail"
            className="inline-flex items-center gap-2 btn-secondary btn-advanced px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base"
          >
            Get in Touch
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href={portfolioData.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary btn-advanced px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base"
          >
            <BsFileEarmarkText className="w-5 h-5" />
            View Resume
          </a>
        </div>
      </div>
    </main>
  );
}
