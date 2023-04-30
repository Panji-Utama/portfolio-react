/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   colors: {
  //     transparent: 'transparent',
  //     current: 'currentColor',
  //     'darker-navy': '#0B2447',
  //     'dark-navy': '#19376D',
  //     'jeans': '#576CBC',
  //     'aqua': '#A5D7E8',
  //   },
  // },
  theme: {
    extend: {
      colors: {
        'darker-navy': '#0B2447',
        'dark-navy': '#19376D',
        'jeans': '#576CBC',
        'aqua': '#A5D7E8',
      },
    },
  },
  variants: {},
  plugins: [],
}