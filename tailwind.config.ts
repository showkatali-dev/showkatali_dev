import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "2px -5px 1px #090911",
        myShadow2: "-2px -5px 1px #090911",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#fb5343",
          secondary: "#FFFFFF",
          neutral: "#252525",
          accent: "#6549d5",
          "base-100": "#090911",
        },
      },
    ],
  },
};
export default config;
