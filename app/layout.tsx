import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Siddhant | Personal Portfolio",
  description: "Siddhant is a full-stack developer with 8 years of experience.",
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
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.toggle('dark', storedTheme === 'dark');
                } catch(e) {
                  console.error('Error accessing localStorage:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#A3BCF9] absolute top-0 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[12rem] sm:w-[68.75rem] dark:bg-[#223e74]"></div>
        <div className="bg-[#c2d4f9] fixed bottom-0 -z-10 left-[-35rem] min-h-[50rem] w-[150rem] rounded-full blur-[12rem] sm:w-[78.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#223e74]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
