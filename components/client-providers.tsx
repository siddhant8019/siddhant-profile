"use client";

import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import InteractiveBackground from "@/components/interactive-background";
import Header from "@/components/header";
import FooterWrapper from "@/components/footer-wrapper";
import { Toaster } from "react-hot-toast";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <InteractiveBackground />
        <div className="relative z-10">
          <Header />
          {children}
          <FooterWrapper />
        </div>
        <Toaster position="top-right" />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
