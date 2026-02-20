import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-semibold capitalize mb-6 text-center text-[#1a1a1a] section-title">
      {children}
    </h2>
  );
}
