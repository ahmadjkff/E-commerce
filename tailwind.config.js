/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#F5F5F5",
        button2: "#DB4444",
        customblack: "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "429px",
        xs2: "375px",
      },
    },
  },
  plugins: [],
};
