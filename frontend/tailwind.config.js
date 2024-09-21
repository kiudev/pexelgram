/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-100': '#171f1c',
        'green-200': '#2c3431',
        'green-300': '#434a47',
        'green-400': '#5b615f',
        'green-500': '#747977',
        'green-600': '#8e9391',
        'dark-100': '#121212',
        'dark-200': '#282828',
        'dark-300': '#3f3f3f',
        'dark-400': '#575757',
        'dark-500': '#717171',
        'dark-600': '#8b8b8b',
        'mixed-100': '#131413',
        'mixed-200': '#282928',
        'mixed-300': '#3f403f',
        'mixed-400': '#585858',
        'mixed-500': '#717271',
        'mixed-600': '#8c8c8c',
      },
    },
  },
  plugins: [],
}

