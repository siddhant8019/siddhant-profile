import { portfolioData } from "@/lib/data";
import { BsLinkedin, BsGithub, BsFileEarmarkText } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4 section-title">
          Contact
        </h1>
        <p className="text-lg sm:text-xl text-[#222222]/80 leading-relaxed">
          Have a project or role in mind, or want to trade notes? Send a note, I
          read them all.
        </p>
      </div>

      <div className="glass-card card-ambient p-8 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#222222] mb-6 section-title">
              Get in touch
            </h2>

            <div className="space-y-4">
              <a
                href="/mail"
                className="flex items-center gap-3 text-[#222222]/80 hover:text-[#222222] transition-colors group"
              >
                <div className="p-2 bg-[#7B7B7B]/20 rounded-xl group-hover:bg-[#7B7B7B]/30 transition-colors">
                  <HiMail className="text-lg" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-[#222222]/70">
                    {portfolioData.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#222222]/80 hover:text-[#222222] transition-colors group"
              >
                <div className="p-2 bg-[#7B7B7B]/20 rounded-xl group-hover:bg-[#7B7B7B]/30 transition-colors">
                  <BsLinkedin className="text-lg" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-[#222222]/70">
                    linkedin.com/in/siddhantnpatil
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#222222]/80 hover:text-[#222222] transition-colors group"
              >
                <div className="p-2 bg-[#7B7B7B]/20 rounded-xl group-hover:bg-[#7B7B7B]/30 transition-colors">
                  <BsGithub className="text-lg" />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-[#222222]/70">
                    github.com/siddhant8019
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#222222]/80 hover:text-[#222222] transition-colors group"
              >
                <div className="p-2 bg-[#7B7B7B]/20 rounded-xl group-hover:bg-[#7B7B7B]/30 transition-colors">
                  <BsFileEarmarkText className="text-lg" />
                </div>
                <div>
                  <div className="font-medium">Resume</div>
                  <div className="text-sm text-[#222222]/70">
                    Download PDF
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#222222] mb-6 section-title">
              Let's work together
            </h2>

            <p className="text-sm sm:text-base text-[#222222]/80 mb-6 leading-relaxed">
              I'm always interested in hearing about new opportunities,
              interesting problems, or just having a conversation about backend
              systems, AI workflows, or building things that matter.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-[#F8F8F8] rounded-2xl border border-[#7B7B7B]/20">
                <h3 className="text-sm sm:text-base font-semibold text-[#222222] mb-2">
                  Backend & Systems
                </h3>
                <p className="text-xs sm:text-sm text-[#222222]/70">
                  APIs, data pipelines, reliability engineering
                </p>
              </div>

              <div className="p-4 bg-[#F8F8F8] rounded-2xl border border-[#7B7B7B]/20">
                <h3 className="text-sm sm:text-base font-semibold text-[#222222] mb-2">
                  Agentic Systems
                </h3>
                <p className="text-xs sm:text-sm text-[#222222]/70">
                  RAG, vector search, policy-aware automation
                </p>
              </div>

              <div className="p-4 bg-[#F8F8F8] rounded-2xl border border-[#7B7B7B]/20">
                <h3 className="text-sm sm:text-base font-semibold text-[#222222] mb-2">
                  Full-stack Delivery
                </h3>
                <p className="text-xs sm:text-sm text-[#222222]/70">
                  End-to-end product development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
