import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Explicitly using class-based dark mode so I can force Light Mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A", // Slate 900
          light: "#1E293B",
        },
        secondary: {
          DEFAULT: "#6366F1", // Indigo 500
          light: "#818CF8",
        },
        accent: {
          DEFAULT: "#4F46E5", // Indigo 600
          light: "#6366F1",
        },
        background: {
          DEFAULT: "#F8FAFC", // Slate 50
          dark: "#0F172A",    // Slate 900
        },
        charcoal: "#0F172A",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;
