/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-black": "#030303",
        "body-gray": "#161616",
        "card-gray": "#1E1E1E",
      },
      width: {
        454: "454px",
      },
      height: {
        512: "512px",
      },
    },
  },
  plugins: [],
};
