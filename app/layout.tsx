import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import InteractiveBackground from "@/components/interactive-background";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata = {
  metadataBase: new URL("https://siprofile.me"),
  title: "Siddhant Patil, AI Engineer and Product Guy",
  description:
    "AI Engineer focused on agentic systems, product development, and intelligent automation. Work at Teamcast.ai, CSULB, humancloud.",
  keywords: [
    "Software Engineer",
    "Backend",
    "AI systems",
    "Full-stack",
    "Python",
    "FastAPI",
    "React",
    "PostgreSQL",
  ],
  authors: [{ name: "Siddhant Patil" }],
  openGraph: {
    title: "Siddhant Patil, AI Engineer and Product Guy",
    description:
      "AI Engineer focused on agentic systems, product development, and intelligent automation. Work at Teamcast.ai, CSULB, humancloud.",
    type: "website",
    url: "https://siprofile.me",
    siteName: "Siddhant Patil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Patil, AI Engineer and Product Guy",
    description:
      "AI Engineer focused on agentic systems, product development, and intelligent automation. Work at Teamcast.ai, CSULB, humancloud.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Siddhant Patil",
              jobTitle: "Software Engineer",
              description:
                "Engineer focused on backend systems, agentic workflows, and full-stack delivery",
              url: "https://siprofile.me",
              sameAs: [
                "https://www.linkedin.com/in/siddhantnpatil",
                "https://github.com/siddhant8019",
              ],
              email: "sidhnpatil08@gmail.com",
              knowsAbout: [
                "Software Engineering",
                "Backend Development",
                "AI Systems",
                "Full-stack Development",
                "Python",
                "FastAPI",
                "React",
                "PostgreSQL",
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Teamcast.ai",
                },
                {
                  "@type": "Organization",
                  name: "CSULB",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#f6f9f1] text-[#000000] relative pt-16 sm:pt-28 md:pt-36`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="relative">
              <InteractiveBackground />
              <Header />
              {children}
              <Footer />
            </div>
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
