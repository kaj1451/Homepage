/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cdw: {
          red: '#ff4d4d',
          navy: '#1a3e59',
        },
      },
    },
  },
  plugins: [],
};