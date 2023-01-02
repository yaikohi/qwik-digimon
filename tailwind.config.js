/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        gravity: ["ABC Gravity Normal", "Ubuntu", "sans-serif"],
        "gravity-condensed": ["ABC Gravity Condensed", "Ubuntu", "sans-serif"],
        "gravity-expanded": ["ABC Gravity Expanded", "Ubuntu", "sans-serif"],
        "gravity-extended": ["ABC Gravity Extended", "Ubuntu", "sans-serif"],
        "gravity-wide": ["ABC Gravity Wide", "Ubuntu", "sans-serif"],
        diatype: ["ABC Diatype Mono Regular", "Ubuntu", "sans-serif"],
        "diatype-bold": ["ABC Diatype Mono Bold", "Ubuntu", "sans-serif"],
        "diatype-light": ["ABC Diatype Mono Light", "Ubuntu", "sans-serif"],
        "diatype-medium": ["ABC Diatype Mono Medium", "Ubuntu", "sans-serif"],
        "diatype-thin": ["ABC Diatype Mono Thin", "Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   fontFamily: true,
  // },
};
