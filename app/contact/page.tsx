import { portfolioData } from "@/lib/data";
import { BsLinkedin, BsGithub, BsFileEarmarkText } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">
          Contact
        </h1>
        <p className="text-lg sm:text-xl text-[#000000]/80 dark:text-[#ffffff]/80 leading-relaxed">
          Have a project or role in mind, or want to trade notes? Send a note, I
          read them all.
        </p>
      </div>

      <div className="bg-white dark:bg-[#2d2a2a] p-6 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#000000] dark:text-[#ffffff] mb-6">
              Get in touch
            </h2>

            <div className="space-y-4">
              <a
                href="/mail"
                className="flex items-center gap-3 text-[#000000]/80 dark:text-[#f6f9f1]/80 hover:text-[#000000] dark:hover:text-[#f6f9f1] transition-colors group"
              >
                <div className="p-2 bg-[#dae2e2] dark:bg-[#dae2e2]/30 rounded-lg group-hover:bg-[#dae2e2]/80 dark:group-hover:bg-[#dae2e2]/40 transition-colors">
                  <HiMail className="text-lg" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-[#000000]/70 dark:text-[#f6f9f1]/70">
                    {portfolioData.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#000000]/80 dark:text-[#f6f9f1]/80 hover:text-[#000000] dark:hover:text-[#f6f9f1] transition-colors group"
              >
                <div className="p-2 bg-[#dae2e2] dark:bg-[#dae2e2]/30 rounded-lg group-hover:bg-[#dae2e2]/80 dark:group-hover:bg-[#dae2e2]/40 transition-colors">
                  <BsLinkedin className="text-lg" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-[#000000]/70 dark:text-[#f6f9f1]/70">
                    linkedin.com/in/siddhantnpatil
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#000000]/80 dark:text-[#f6f9f1]/80 hover:text-[#000000] dark:hover:text-[#f6f9f1] transition-colors group"
              >
                <div className="p-2 bg-[#dae2e2] dark:bg-[#dae2e2]/30 rounded-lg group-hover:bg-[#dae2e2]/80 dark:group-hover:bg-[#dae2e2]/40 transition-colors">
                  <BsGithub className="text-lg" />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-[#000000]/70 dark:text-[#f6f9f1]/70">
                    github.com/siddhant8019
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#000000]/80 dark:text-[#f6f9f1]/80 hover:text-[#000000] dark:hover:text-[#f6f9f1] transition-colors group"
              >
                <div className="p-2 bg-[#dae2e2] dark:bg-[#dae2e2]/30 rounded-lg group-hover:bg-[#dae2e2]/80 dark:group-hover:bg-[#dae2e2]/40 transition-colors">
                  <BsFileEarmarkText className="text-lg" />
                </div>
                <div>
                  <div className="font-medium">Resume</div>
                  <div className="text-sm text-[#000000]/70 dark:text-[#f6f9f1]/70">
                    Download PDF
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#000000] dark:text-[#ffffff] mb-6">
              Let's work together
            </h2>

            <p className="text-sm sm:text-base text-[#000000]/80 dark:text-[#ffffff]/80 mb-6 leading-relaxed">
              I'm always interested in hearing about new opportunities,
              interesting problems, or just having a conversation about backend
              systems, AI workflows, or building things that matter.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-[#dae2e2]/20 dark:bg-[#dae2e2]/20 rounded-lg">
                <h3 className="text-sm sm:text-base font-semibold text-[#000000] dark:text-[#ffffff] mb-2">
                  Backend & Systems
                </h3>
                <p className="text-xs sm:text-sm text-[#000000]/70 dark:text-[#ffffff]/70">
                  APIs, data pipelines, reliability engineering
                </p>
              </div>

              <div className="p-4 bg-[#dae2e2]/20 dark:bg-[#dae2e2]/20 rounded-lg">
                <h3 className="text-sm sm:text-base font-semibold text-[#000000] dark:text-[#ffffff] mb-2">
                  Agentic Systems
                </h3>
                <p className="text-xs sm:text-sm text-[#000000]/70 dark:text-[#ffffff]/70">
                  RAG, vector search, policy-aware automation
                </p>
              </div>

              <div className="p-4 bg-[#dae2e2]/20 dark:bg-[#dae2e2]/20 rounded-lg">
                <h3 className="text-sm sm:text-base font-semibold text-[#000000] dark:text-[#ffffff] mb-2">
                  Full-stack Delivery
                </h3>
                <p className="text-xs sm:text-sm text-[#000000]/70 dark:text-[#ffffff]/70">
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
