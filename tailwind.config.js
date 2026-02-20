/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        75: "75ms",
        400: "400ms",
        500: "500ms",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      colors: {
        ink: "#1a1a1a",
        paper: "#f5f4f0",
        muted: "#5c5c5c",
      },
      borderRadius: {
        card: "6px",
        btn: "4px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        code: ["var(--font-fira-code)", "monospace"],
      },
    },
  },
  plugins: [],
};
