/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-100': '#5b51d8',
        'blue-200': '#7263dd',
        'blue-300': '#8675e2',
        'blue-400': '#9988e7',
        'blue-500': '#ab9beb',
        'blue-600': '#bcaeef',
        'dark-100': '#121212',
        'dark-200': '#282828',
        'dark-300': '#3f3f3f',
        'dark-400': '#575757',
        'dark-500': '#717171',
        'dark-600': '#8b8b8b',
        'mixed-100': '#1b1823',
        'mixed-200': '#302d38',
        'mixed-300': '#46444d',
        'mixed-400': '#5e5b64',
        'mixed-500': '#77757c',
        'mixed-600': '#908f95',
      }
    },
  },
  plugins: [],
}

