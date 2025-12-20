import { portfolioData } from "@/lib/data";
import Image from "next/image";
import { BsFileEarmarkText } from "react-icons/bs";

export default function About() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-4">
          About Me
        </h1>
        <p className="text-lg sm:text-xl text-[#000000]/70 leading-relaxed">
          Building AI products that matter
        </p>
      </div>

      {/* Hero Bio Section */}
      <div className="bg-white p-8 rounded-2xl mb-12 border border-[#dae2e2]">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <Image
                src="/profile.jpeg"
                alt="Siddhant Patil"
                fill
                className="rounded-2xl object-cover border-2 border-[#dae2e2]"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-base sm:text-lg lg:text-xl text-[#000000] leading-relaxed mb-6">
              {portfolioData.about.bio}
            </p>

            <div className="border-l-4 border-[#dae2e2] pl-6">
              <p className="text-base sm:text-lg font-medium text-[#000000] mb-2">
                My Mission
              </p>
              <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed">
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
            className="text-center bg-white p-6 rounded-lg border border-[#dae2e2] hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl font-bold text-[#000000] mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-[#000000]/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Approach Section */}
      <div className="bg-white p-8 rounded-2xl border border-[#dae2e2] mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#000000] mb-4">
          My Approach
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#000000]/80 leading-relaxed">
          {portfolioData.about.approach}
        </p>
      </div>

      {/* Strengths Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#000000] mb-8 text-center">
          Core Strengths
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.about.strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-[#dae2e2] hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-3">
                {strength.title}
              </h3>
              <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>

          {/* Interests, Tools & Personality Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Interests */}
            <div className="bg-white p-6 rounded-lg border border-[#dae2e2] hover:shadow-lg transition-shadow">
              <h2 className="text-lg sm:text-xl font-semibold text-[#000000] mb-6">
                What I'm Passionate About
              </h2>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-[#dae2e2] text-[#000000] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#dae2e2]/80 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-lg border border-[#dae2e2] hover:shadow-lg transition-shadow">
              <h2 className="text-lg sm:text-xl font-semibold text-[#000000] mb-6">
                Technologies I Love
              </h2>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-[#dae2e2] text-[#000000] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#dae2e2]/80 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Personality */}
            <div className="bg-white p-6 rounded-lg border border-[#dae2e2] hover:shadow-lg transition-shadow">
              <h2 className="text-lg sm:text-xl font-semibold text-[#000000] mb-6">
                Behind the Code
              </h2>
              <div className="space-y-3">
                {portfolioData.personality.map((trait, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[#f6f9f1] rounded-lg hover:bg-[#dae2e2]/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#797d59] rounded-full"></div>
                    <span className="text-sm text-[#000000]/80">
                      {trait}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

      {/* Call to Action */}
      <div className="mt-12 text-center bg-[#000000] p-8 rounded-2xl border border-[#dae2e2]">
        <h2 className="text-xl sm:text-2xl font-bold text-[#f6f9f1] mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-sm sm:text-base text-[#f6f9f1]/80 mb-6 leading-relaxed">
          Have an AI product idea or need help with intelligent systems? I'd
          love to hear about it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/mail"
            className="inline-flex items-center gap-2 bg-[#f6f9f1] text-[#000000] px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#f6f9f1]/90 transition-colors font-medium border border-[#dae2e2] text-sm sm:text-base"
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
            className="inline-flex items-center gap-2 bg-[#dae2e2] text-[#000000] px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#dae2e2]/90 transition-colors font-medium border border-[#dae2e2] text-sm sm:text-base"
          >
            <BsFileEarmarkText className="w-5 h-5" />
            View Resume
          </a>
        </div>
      </div>
    </main>
  );
}
