/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.tsx"],
  theme: {
    extend: {},
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#fff",
      black: "#28282B",
      grey: {
        100: "#696969",
        200: "#484848",
      },
      red: "#FF003F",
    },
    fontSize: {
      10: [".625rem", ".625rem"],
      12: [".75rem", ".75rem"],
      13: [".8125rem", ".8125rem"],
      14: [".875rem", ".875rem"],
      16: ["1rem", "1rem"],
      18: ["1.125rem", "1.125rem"],
      20: ["1.25rem", "1.25rem"],
      22: ["1.375rem", "1.375rem"],
      24: ["1.5rem", "1.5rem"],
      26: ["1.625rem", "1.625rem"],
      28: ["1.75rem", "1.75rem"],
      30: ["1.875rem", "1.875rem"],
      32: ["2rem", "2rem"],
      36: ["2.25rem", "2.25rem"],
      40: ["2.5rem", "2.5rem"],
      44: ["2.75rem", "2.75rem"],
      48: ["3rem", "3rem"],
      52: ["3.25rem", "3.25rem"],
      56: ["3.5rem", "3.5rem"],
    },
    spacing: {
      0: "0rem",
      1: ".0625rem",
      2: ".125rem",
      4: ".25rem",
      6: ".375rem",
      8: ".5rem",
      10: ".625rem",
      12: ".75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
    },
    borderRadius: {
      DEFAULT: "24px",
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
        ".button-link-light": {
          ...buttonLinkPrimary,
          "@apply text-black bg-white hover:text-white hover:bg-black": {},
        },
        ".button-link-dark": {
          ...buttonLinkPrimary,
          "@apply text-white bg-black hover:text-black hover:bg-white": {},
        },
      });
    },
  ],
};
