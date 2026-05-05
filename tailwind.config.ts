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
          DEFAULT: "#003147", // Midnight Navy
          light: "#004360",
        },
        secondary: {
          DEFAULT: "#700101", // Deep Maroon
          light: "#8B0000",
        },
        accent: {
          DEFAULT: "#C81420", // Vibrant Red
          light: "#E31E24",
        },
        background: {
          DEFAULT: "#FFF1D0", // Academic Cream
          dark: "#003147",    // Midnight Navy
        },
        charcoal: "#003147",
        steel: "#6A9AB0",   // Steel Blue
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
