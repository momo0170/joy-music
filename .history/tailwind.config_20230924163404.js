/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1.5: '1.5px';,
      },
      boxShadow: {
        inner2: '0 0 0 1.5px #7c3aed inset',
        hoverInput: '0 0 0 1px #ABABAB inset',
      },
      borderColor: {
        hoverInput: '#ABABAB'
      }
    },
  },
  plugins: [],
};
