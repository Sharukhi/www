import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  themes: [
    {
      theme: {
        primary: "#0e1610",

        secondary: "#acc9cb",

        accent: "#8faab9",

        neutral: "#f8fbf9",

        "base-100": "#f8fbf9",

        info: "#60a5fa",

        success: "#69a179",

        warning: "#fb7185",

        error: "#fbbf24",
      },
    },
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["theme"],
  },
};
export default config;
