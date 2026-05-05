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
          DEFAULT: "#023047", // Midnight Navy
          light: "#044361",
        },
        secondary: {
          DEFAULT: "#219EBC", // Electric Teal
          light: "#8ECAE6",
        },
        accent: {
          DEFAULT: "#FFB703", // Sunlight Yellow
          light: "#FB8500",   // Bright Orange
        },
        background: {
          DEFAULT: "#F8FBFF", // Sky White
          dark: "#023047",    // Midnight Navy
        },
        charcoal: "#023047",
        sky: "#8ECAE6",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-playfair)"],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
