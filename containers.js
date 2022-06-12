const plugin = require('tailwindcss/plugin');

const containers = plugin(({ addUtilities, theme, e }) => {

  const values = theme('container');
  let utilities = Object.entries(values).map(([key, value]) => {
    return {
      [`.${e(`container-${key}`)}`]: {width: `${value}`},
    };
  });
  addUtilities(utilities);

}, {
  theme: {
    container: {
      'sm': '12.5rem',
      'md': '25rem',
      'lg': '50rem',
      'xl': '75rem',
    }
  }
});

module.exports = containers;
