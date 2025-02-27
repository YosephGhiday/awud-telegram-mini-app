/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#85BB65",
        secondary: "#384F2A",
        textPrimary: "#374653",
        textSecondary: "#79838C",
        warning: "#FF7B00",
        warningLight: "#FFF4E9",
      },
      screens: {
        desktop: "2000px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
