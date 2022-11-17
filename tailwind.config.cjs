/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.tsx"],
  theme: {
    extend: {},
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFF",
      black: "#28282B",
      grey: {
        100: "#E8E8E8",
        200: "#DCDCDC",
        300: "#BEBEBE",
        400: "#696969",
        500: "#484848",
      },
      red: "#FF003F",
    },
    fontSize: {
      14: [".875rem"],
    },
    spacing: {
      12: ".75rem",
      32: "2rem",
      100: "100%",
    },
    borderRadius: {
      DEFAULT: "24px",
      8: "8px",
    },
    borderWidth: {
      DEFAULT: "1px",
    },
  },
  plugins: [
    ({ addComponents }) => {
      const buttonLinkPrimary = {
        "@apply text-14 inline-flex items-center py-12 px-32 border border-black rounded ease-out duration-300":
          {},
      };

      addComponents({
        ".button-link-secondary": {
          "@apply w-100 text-14 text-black bg-white inline-flex p-12 ease-out duration-300 hover:bg-grey-100":
            {},
        },
        ".button-link-light": {
          ...buttonLinkPrimary,
          "@apply text-black bg-white hover:text-white hover:bg-black": {},
        },
        ".button-link-dark": {
          ...buttonLinkPrimary,
          "@apply text-white bg-black hover:text-black hover:bg-white": {},
        },
        ".button": {
          ...buttonLinkPrimary,
          "@apply button-link-dark": {},
        },
      });
    },
    ({ addBase }) => {
      addBase({
        body: {
          "@apply leading-none antialiased": {},
        },
      });
    },
  ],
};
