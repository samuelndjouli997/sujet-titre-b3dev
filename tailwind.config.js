/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      jost: ['Jost', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-green': '#539407',
        'primary-dark-green': '#0F4229',
        'primary-light-green': '#E8F5E9',
        'dark': '#191919',
        'blue-ish-gray': '#8191A0',
      },
    },
  },
  plugins: [],
}
