/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
      maxWidth: {
        400: "25rem",
        576: "36rem",
      },
      borderWidth: {
        1: "1px",
      },
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: {
        100: "#F8F8F8",
        200: "#F2F2F2",
      },
      black: "#131313",
      grey: {
        100: "#E8E8E8",
        // 200: "#DCDCDC",
        // 300: "#BEBEBE",
        400: "#696969",
        500: "#484848",
        600: "#202020",
        700: "#151515",
      },
      red: "#FF3131",
    },
    fontSize: {
      14: [".875rem"],
      // 18: ["1.125rem"],
      20: ["1.25rem"],
      24: ["1.5rem"],
      28: ["1.75rem"],
      32: ["2rem"],
      // 36: ["2.25rem"],
      40: ["2.5rem"],
      52: ["3.25rem"],
    },
    spacing: {
      0: "0rem",
      1: ".0625rem",
      2: ".125rem",
      3: ".1875rem",
      4: ".25rem",
      8: ".5rem",
      12: ".75rem",
      16: "1rem",
      20: "1.25rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
      44: "2.75rem",
      48: "3rem",
      56: "3.5rem",
      68: "4.25rem",
      102: "6.375rem",
      104: "6.5rem",
      108: "6.75rem",
      132: "8.25rem",
      194: "12.125rem",
      260: "16.25rem",
      15: "15vh",
      quarter: "25%",
      35: "35%",
      half: "50%",
      65: "65%",
      full: "100%",
    },
    borderRadius: {
      DEFAULT: "24px",
      // 0: "0px",
      2: "2px",
      8: "8px",
    },
    scale: {
      102: "1.02",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
          "@apply text-white-200 bg-black outline-none hover:text-black hover:bg-white-200 focus-visible:text-black focus-visible:bg-white-200":
            {},
        },
        ".button-link-secondary": {
          "@apply text-24 text-white-200 uppercase font-semibold leading-normal duration-200 outline-none ease-out border-y-1 border-transparent lg:text-14 hover:border-b-red focus-visible:border-b-red":
            {},
        },
        ".button-link-tertiary": {
          "@apply text-14 text-grey-400 underline underline-offset-2 ease-out duration-200 py-2 px-4 outline-none hover:text-black hover:decoration-black focus-visible:text-black focus-visible:decoration-black focus-visible:outline-1 focus-visible:outline-red":
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
        ".genre-list-transition": {
          transition: "border-color .2s ease-out, font-weight .15s ease-out",
        },
      });

      addBase({
        body: {
          "@apply font-open-sans text-black bg-white-200 leading-none antialiased":
            {},
        },
      });
    },
  ],
};
