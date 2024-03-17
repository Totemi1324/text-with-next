import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "dark-orange-blue": {
          extend: "dark", // Inherit default values from the dark theme
          colors: {
            background: "#070707",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#f5a524",
              50: "#302311",
              100: "#5c4018",
              200: "#8c601e",
              300: "#bf8222",
              400: "#f5a524",
              500: "#f9af43",
              600: "#fcb95c",
              700: "#fec274",
              800: "#ffcc8b",
              900: "#ffd6a2",
              foreground: "#ffffff", // Assuming you meant the text color for primary elements
            },
            secondary: {
              DEFAULT: "#2474f5",
              50: "#161b2f",
              100: "#1f2f5b",
              200: "#25458b",
              300: "#275cbf",
              400: "#2474f5",
              500: "#5282f7",
              600: "#6f91f8",
              700: "#889ffa",
              800: "#9eaffb",
              900: "#b3befc",
              foreground: "#ffffff", // Assuming you meant the text color for secondary elements
            },
            focus: "#f9af43",
          },
        },
        "light-orange-blue": {
          extend: "light", // Inherit default values from the light theme
          colors: {
            background: "#ffffff",
            foreground: "#070707",
            primary: {
              DEFAULT: "#f5a524",
              50: "#302311",
              100: "#5c4018",
              200: "#8c601e",
              300: "#bf8222",
              400: "#f5a524",
              500: "#f9af43",
              600: "#fcb95c",
              700: "#fec274",
              800: "#ffcc8b",
              900: "#ffd6a2",
              foreground: "#ffffff", // Assuming you meant the text color for primary elements
            },
            secondary: {
              DEFAULT: "#2474f5",
              50: "#161b2f",
              100: "#1f2f5b",
              200: "#25458b",
              300: "#275cbf",
              400: "#2474f5",
              500: "#5282f7",
              600: "#6f91f8",
              700: "#889ffa",
              800: "#9eaffb",
              900: "#b3befc",
              foreground: "#ffffff", // Assuming you meant the text color for secondary elements
            },
            focus: "#f9af43",
          },
        },
      },
    }),
  ],
};
export default config;