/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      keania: ["'Keania One'", "sans-serif"],
    },
    colors: {
      'input': '#0000008e',
      'white': '#fff',
      'menu': '#2524244f0',
      'stagesProces': 'rgba(43, 0, 0, 0.40)',
      'borderImage': 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1',
      'input': '#060606',
      'inputFilter': 'black',
      'inputBG': '#090909',
      'brown': '#59372A',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
