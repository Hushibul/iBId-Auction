/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        blue: "#4d79d2",
        red: "#f02222",
        gray: "#334141",
        lightGray: "#777",
      },
    },
  },
  plugins: [],
};
