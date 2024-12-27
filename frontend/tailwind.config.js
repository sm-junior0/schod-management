/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1a237e',
          900: '#0d1b3e',
        },
      },
    },
  },
  plugins: [],
};