/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: {
        100: "#FFFFFF",
        200: "#F2F2F2",
      },
      black: "#131313",
      grey: {
        100: "#E8E8E8",
        200: "#DCDCDC",
        300: "#BEBEBE",
        400: "#696969",
        500: "#484848",
        600: "#202020",
      },
    },
    fontSize: {
      14: [".875rem"],
      18: ["1.125rem"],
      20: ["1.25rem"],
      24: ["1.5rem"],
    },
    spacing: {
      0: "0rem",
      2: ".125rem",
      3: ".1875rem",
      8: ".5rem",
      12: ".75rem",
      20: "1.25rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      48: "3rem",
      56: "3.5rem",
      quarter: "25%",
      full: "100%",
    },
    borderRadius: {
      DEFAULT: "24px",
      8: "8px",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    ({ addComponents }) => {
      const buttonLinkPrimary = {
        "@apply inline-flex items-center py-12 px-32 border border-black rounded ease-out duration-300":
          {},
      };

      addComponents({
        ".button-link-secondary": {
          "@apply w-full text-14 text-grey-200 font-normal bg-black inline-flex py-12 px-28 ease-out duration-300 hover:text-white-100 hover:bg-grey-600 focus:outline-none focus:bg-grey-600":
            {},
        },
        ".button-link-light": {
          ...buttonLinkPrimary,
          "@apply text-black bg-white-200 hover:text-white-200 hover:bg-black":
            {},
        },
        ".button-link-dark": {
          ...buttonLinkPrimary,
          "@apply text-white-200 bg-black hover:text-black hover:bg-white-200":
            {},
        },
        ".button": {
          ...buttonLinkPrimary,
          "@apply button-link-dark": {},
        },
      });
    },
    ({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
    ({ addBase }) => {
      addBase({
        body: {
          "@apply font-open-sans bg-white-100 leading-none antialiased": {},
        },
      });
    },
  ],
};
