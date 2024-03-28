import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      tahiti: {
        100: "#448fc1",
        200: "#146cb4",
      },

      fieryRed: {
        100: "#f3bf8e",
        200: "#f3bf8e",
        300: "#e98b2e",
        400: "#2D323C",
      },
    },
  },
  plugins: [],
};
