module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
