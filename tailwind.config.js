const defaultTheme = require("tailwindcss/defaultTheme");
const { rose } = require("tailwindcss/colors");

const colors = {
  primary: { light: "#33D17E", DEFAULT: "#00c65e" },
  warning: "#ffd567",
  error: "#ED5454",
  palette: {
    100: "#f5f7f7",
    200: "#d4dddb",
    300: "#9e9e9e",
    400: "#555555",
    500: "#242424",
    600: "#0d0d0d",
  },
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({ ...theme("colors"), ...colors }),
    borderColor: (theme) => ({ ...theme("colors"), ...colors }),
    textColor: (theme) => ({ ...theme("colors"), ...colors }),
    placeholderColor: (theme) => ({ ...theme("colors"), ...colors }),
    extend: {
      fontFamily: {
        sans: ["Sora", ...defaultTheme.fontFamily.sans],
        content: ["Source\\ Sans\\ Pro", ...defaultTheme.fontFamily.sans],
        mono: ["Source\\ Code\\ Pro", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        rose,
      },
      height: {
        "2px": "2px",
        "4px": "4px",
        "6px": "6px",
        "8px": "8px",
      },
      width: {
        "2px": "2px",
        "4px": "4px",
        "6px": "6px",
        "8px": "8px",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};
