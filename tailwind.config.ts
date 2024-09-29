import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "full-minus-2": "calc(100% - 2rem)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        midground: "var(--midground)",
      },
    },
  },
  plugins: [],
};
export default config;
