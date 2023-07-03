/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dk-primary-50": "#E8EDFB",
        "dk-primary-150": "#A5B8EF",
        "dk-primary-250": "#7795E8",
        "dk-primary-350": "#4A71E0",
        "dk-primary-500": "#1D4ED8",
        "dk-primary-600": "#173EAD",
        "dk-primary-700": "#112F82",
        "dk-primary-800": "#0C1F56",
        "dk-primary-900": "#06102B",
      },
    },
  },
  plugins: [],
};
