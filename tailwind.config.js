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

  module.exports = {
    content: [
      './index.html', // or your entry file
      './src/**/*.{js,ts,jsx,tsx}', // if you have a src directory
    ],
    theme: {
      extend: {
        colors: {
          orange: {
            100: '#FFE0B2', // light orange
            200: '#FFB74D', // medium orange
            400: '#FF8A00', // vibrant orange
            500: '#FF6F00', // main orange
            600: '#FF5722', // darker orange
          }
        }
      }
    },
    plugins: [],
  }
  
  