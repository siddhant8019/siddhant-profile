import { experiencesData } from "@/lib/data";
import Image from "next/image";

// Company logos mapping
const companyLogos = {
  "Teamcast.ai": "/logos/teamcast.svg",
  CSULB: "/logos/csulb.svg",
  humancloud: "/logos/humancloud.svg",
  "Google Cloud Community India": "/logos/google-cloud.svg",
};

// Company website URLs
const companyUrls = {
  "Teamcast.ai": "https://teamcast.ai/",
  CSULB: "https://www.csulb.edu/",
  humancloud: "https://humancloud.dev/",
  "Google Cloud Community India": "https://cloud.google.com/",
};

export default function Experience() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4 section-title">
          Experience
        </h1>
        <p className="text-lg sm:text-xl text-[#222222]/80 leading-relaxed">
          Building AI products and intelligent systems across different
          organizations.
        </p>
      </div>

      <div className="space-y-6">
        {experiencesData.map((experience, index) => (
          <div
            key={index}
            className="glass-card card-hover card-ambient p-7 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                {/* Company Logo */}
                <a
                  href={
                    companyUrls[experience.company as keyof typeof companyUrls]
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-12 h-12 bg-[#FFFFFF] rounded-xl border border-[#7B7B7B]/30 flex items-center justify-center hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
                  aria-label={`Visit ${experience.company} website`}
                >
                  {companyLogos[
                    experience.company as keyof typeof companyLogos
                  ] ? (
                    <Image
                      src={
                        companyLogos[
                          experience.company as keyof typeof companyLogos
                        ]
                      }
                      alt={`${experience.company} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-[#7B7B7B]/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-[#222222]">
                        {experience.company.charAt(0)}
                      </span>
                    </div>
                  )}
                </a>

                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-[#222222] mb-1">
                    {experience.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#222222]/70 mb-2">
                    {experience.company}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-[#222222]/70">
                    <span>{experience.dates}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
