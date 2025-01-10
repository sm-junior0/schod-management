/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4070F4',
          dark: '#3060E0',
          light: '#5080FF',
        },
        navy: {
          800: '#1a237e',
          900: '#0A1B3D',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};