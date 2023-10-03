/** @type {import('tailwindcss').Config} */
/* eslint-env node */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icon: "#a3e3ff",
        button: "#1F6DAD",
        formBg: "#EBF8FE",
        bgColor: "#f4f8f8"
      }
    },
  },
  plugins: [],
}
