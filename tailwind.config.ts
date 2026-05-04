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
          DEFAULT: "#0F172A", // Deep Sea Teal (Blue-Black)
          light: "#1E293B",
        },
        secondary: {
          DEFAULT: "#91A9B1", // Quietude Blue
          light: "#CBD5E1",
        },
        accent: {
          DEFAULT: "#C5A059", // Muted Gold
          light: "#E2D1A1",
        },
        background: {
          DEFAULT: "#ECF0F1", // Cloud White
          dark: "#0F172A",    // Deep Sea Teal
        },
        charcoal: "#1E293B",
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
