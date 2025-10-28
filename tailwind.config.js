/** @type {import('tailwindcss').Config} */
  export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#7C3AED', // purple
      secondary: '#06B6D4', // cyan
      softBlue: '#eef7ff',
    },
    boxShadow: {
      'card-lg': '0 12px 30px rgba(15, 23, 42, 0.08)'
    }
  },
};
export const plugins = [];
