const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{ts,js,jsx,tsx}",
    "./src/components/**/*.{ts,js,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": {
        max: "1279px",
      },
      ...defaultTheme.screens,
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "6rem",
        "2xl": "8rem",
      },
    },
    fontFamily: {
      body: ["Noto Sans JP"],
      serif: ["Noto Serif JP", "serif"],
      sans: ["Noto Sans JP", "sans-serif"],
    },
    extend: {
      fontFamily: {
        sawarabi: ["Sawarabi Mincho", "serif"],
      },
      colors: {
        primary: "#8e5e25",
        secondaly: "#f8b62d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
