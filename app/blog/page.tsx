import { portfolioData } from "@/lib/data";
import { BsMedium, BsArrowUpRight } from "react-icons/bs";

export default function Blog() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">
          Writing
        </h1>
        <p className="text-lg sm:text-xl text-[#000000]/80 dark:text-[#ffffff]/80 leading-relaxed">
          Thoughts on AI engineering, product development, and the future of
          technology.
        </p>
      </div>

      <div className="space-y-6">
        {portfolioData.blog.map((post, index) => (
          <article
            key={index}
            className="bg-white dark:bg-[#2d2a2a] p-6 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <BsMedium className="text-xl sm:text-2xl text-[#000000]/80 dark:text-[#797d59]" />
                <span className="text-xs sm:text-sm text-[#000000]/70 dark:text-[#ffffff]/70">
                  {post.date}
                </span>
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000]/70 dark:text-[#797d59] hover:text-[#000000] dark:hover:text-[#797d59]/80 transition-colors"
                aria-label="Read article on Medium"
              >
                <BsArrowUpRight className="text-lg" />
              </a>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-[#000000] dark:text-[#797d59] mb-3">
              {post.title}
            </h2>

            <p className="text-sm sm:text-base text-[#000000]/80 dark:text-[#ffffff]/80 leading-relaxed mb-4">
              {post.description}
            </p>

            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#000000] text-[#f6f9f1] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-[#000000]/90 transition-colors border border-[#dae2e2] dark:bg-[#797d59] dark:text-[#ffffff] dark:border-[#797d59] dark:hover:bg-[#797d59]/90 text-sm sm:text-base"
            >
              Read on Medium
              <BsArrowUpRight className="text-sm" />
            </a>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://medium.com/@siddhantnitin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#000000] text-[#f6f9f1] px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#000000]/90 transition-colors border border-[#dae2e2] dark:bg-[#797d59] dark:text-[#ffffff] dark:border-[#797d59] dark:hover:bg-[#797d59]/90 text-base sm:text-lg"
        >
          <BsMedium className="text-xl sm:text-2xl" />
          Follow on Medium
        </a>
      </div>
    </main>
  );
}
