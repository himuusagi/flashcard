import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: { light: "#90DDDD", DEFAULT: "#22BABB", dark: "#348888" },
        textBlack: "#333333",
        gray: { light: "#CCCCCC", DEFAULT: "#7E7E7E", dark: "#5E5D5D" },
        accent: "#F24405",
      },
    },
  },
  plugins: [],
};
export default config;
