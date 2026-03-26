/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        //colors: {
        //    purple: "#A78BFA",
          //},
          dropShadow: {
              glow: [
                  "0 0px 5px rgba(255,255,255,0.9)",   
                  "0 0px 10px rgba(13, 156, 0,0.8)",
                  "0 0px 25px rgba(143, 5, 255,0.6)",
                  "0 0px 200px rgba(170, 0, 255,0.9)"
              ]
          },
          keyframes: {
              shake: {
                  '0%, 100%': { transform: 'rotate(0deg)' },
                  '25%': { transform: 'rotate(-20deg)' },
                  '75%': { transform: 'rotate(20deg)' },
              },
          },
          animation: {
              shake: 'shake 0.4s ease-in-out',
          },
    },
  },
  safelist: [
    { pattern: /col-span-\d+/ },
    { pattern: /row-span-\d+/ },
  ],
  plugins: [],
}