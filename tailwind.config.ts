import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      cormorant: ["var(--font-cormorant)", "serif"],
      dmsans: ["var(--font-dm)", "sans-serif"],
    },
  },
},
  plugins: [],
};

export default config;