/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  
  module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your file structure
    ],
    theme: {
      extend: {
        // Add any custom colors here
      },
    },
    plugins: [
      require('tailwindcss-smooth-scroll'),
    ],
  }
  