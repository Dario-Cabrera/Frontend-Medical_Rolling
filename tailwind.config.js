/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Aquí puedes extender o agregar colores personalizados
        w: "#EDECE6",
        ts: "#00C4D0",
        hb: "#016096",
        c: "#333333",
      },
    },
  },
  plugins: [require("daisyui")],
};
