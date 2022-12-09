/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
      opacity: {
        15: ".15",
      },
      aspectRatio: {
        "2/3": "2 / 3",
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
      4: ".25rem",
      8: ".5rem",
      12: ".75rem",
      20: "1.25rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      44: "2.75rem",
      48: "3rem",
      56: "3.5rem",
      68: "4.25rem",
      102: "6.375rem",
      260: "16.25rem",
      quarter: "25%",
      full: "100%",
    },
    borderRadius: {
      DEFAULT: "24px",
      0: "0px",
      8: "8px",
    },
    scale: {
      102: "1.02",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [
    ({ addComponents, addUtilities, addBase }) => {
      const buttonRoundBase = {
        "@apply inline-flex items-center py-12 px-32 border border-black rounded ease-out duration-300":
          {},
      };

      addComponents({
        ".button-link-light": {
          ...buttonRoundBase,
          "@apply text-black bg-white-200 hover:text-white-200 hover:bg-black":
            {},
        },
        ".button-link-dark": {
          ...buttonRoundBase,
          "@apply text-white-200 bg-black hover:text-black hover:bg-white-200":
            {},
        },
        ".button-link-secondary": {
          "@apply w-full text-14 text-grey-200 font-normal bg-black inline-flex py-12 px-28 ease-out hover:text-white-100 hover:bg-grey-600 focus:outline-none focus:bg-grey-600":
            {},
        },
        ".button-light": {
          "@apply button-link-light": {},
        },
        ".button-dark": {
          "@apply button-link-dark": {},
        },
      });

      addUtilities({
        ".scrollbar-none": {
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });

      addBase({
        body: {
          "@apply font-open-sans text-black bg-white-100 leading-none antialiased":
            {},
        },
      });
    },
  ],
};
