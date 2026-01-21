import { projectsData } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

export default function Work() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4 section-title">
          Work
        </h1>
        <p className="text-lg sm:text-xl text-[#222222]/80 leading-relaxed">
          AI-powered products and intelligent systems that solve real problems.
        </p>
      </div>

      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <div
            key={project.slug}
            className="glass-card card-hover card-ambient p-8 rounded-2xl"
          >
            <div className="mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-2">
                {project.name}
              </h2>
              <p className="text-base sm:text-lg text-[#222222]/70">
                {project.tagline}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#222222] mb-2">
                  Problem
                </h3>
                <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#222222] mb-2">
                  What I built
                </h3>
                <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed">
                  {project.whatBuilt}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#222222] mb-2">
                Impact
              </h3>
              <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed">
                {project.impact}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#222222] mb-3">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[#7B7B7B]/15 text-[#222222] px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a
                href={project.link.href}
                className="inline-flex items-center gap-2 btn-primary btn-advanced px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base"
              >
                {project.link.label}
                <BsArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
