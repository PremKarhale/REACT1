/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ This belongs here, not in Vite config
  theme: {
    extend: {},
  },
  plugins: [],
}