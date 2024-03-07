/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#0052FE",
          ".bkg-accent": {
            "background-color": "linear-gradient(90deg, rgba(40,111,234,1) 0%, rgba(27,74,239,1) 100%);",
            "border-color": "#1EA1F1",
          }
        },
      },
    ],
  },
}

