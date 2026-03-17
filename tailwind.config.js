/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            purple: "#A78BFA",
        },
    },
  },
  safelist: [
    { pattern: /col-span-\d+/ },
    { pattern: /row-span-\d+/ },
  ],
  plugins: [],
}