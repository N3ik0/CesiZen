/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom-white': '0px 4px 4px rgba(255, 255, 255, 0.20)',
        'custom-yellow': '0px 4px 4px rgba(255, 255, 0, 0.20)',
      },
      maxWidth: {
        '7.5xl': '1450px',
      },
        colors: {
          'green-dark': 'var(--green-dark)',
          'green-light': 'var(--green-light)',
          'green-medium': 'var(--green-medium)',
          'green-light-pale': 'var(--green-light-pale)',
          'green-blue': 'var(--green-blue)',
          'white-light': 'var(--white-light)',
        },
    },
  },
  plugins: [],
};
