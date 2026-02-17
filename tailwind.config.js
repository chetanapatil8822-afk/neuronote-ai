/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f8fafc",
          dark: "#0f172a",
        },
        primary: {
          DEFAULT: "#6366f1",
          hover: "#4f46e5",
        },
        glass: "rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};
