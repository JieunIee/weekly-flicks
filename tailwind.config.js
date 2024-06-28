/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-black": "#030303",
        "body-gray": "#161616",
        "card-gray": "#1E1E1E",
        "form-gray": "#383838",
        "button-red": "#DD1614",
      },
      width: {
        454: "454px",
      },
      height: {
        512: "512px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".pt-header": {
          paddingTop: "64px",
        },
        ".min-h-screen-with-header": {
          minHeight: "calc(100vh - 64px)",
        },
      });
    },
  ],
};
