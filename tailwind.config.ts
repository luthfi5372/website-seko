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
          DEFAULT: "#1E4B3D", // Deep Forest Green
          light: "#2D5A27",
        },
        secondary: {
          DEFAULT: "#8FBC8F", // Soft Sage Green
          light: "#A3C1AD",
        },
        accent: {
          DEFAULT: "#D4AF37", // Muted Gold
          light: "#E9D8A6",
        },
        background: {
          DEFAULT: "#F9FAFB", // Off-White
          dark: "#11251A",    // Deep Green-Black for contrast sections
        },
        charcoal: "#374151",
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
