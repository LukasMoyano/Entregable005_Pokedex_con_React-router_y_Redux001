/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "xxs": "375px",
      "xxxs": "470px",
    }
  },

  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
  }