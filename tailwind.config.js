/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        silver: "#C0C0C0",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
