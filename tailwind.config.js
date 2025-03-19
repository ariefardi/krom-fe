/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true, // Center the container by default
      padding: '1rem', // Apply a default horizontal padding
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
      },
    },
    extend: {
      colors: {
        TK: {
          background: '#131921',
          default: '#131921',
        },
      },
    },
  },
  plugins: [],
};
