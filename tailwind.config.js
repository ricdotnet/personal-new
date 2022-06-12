module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        $primary: '#2F4858',
        $accent: '#78A441',
      }
    },
  },
  plugins: [
    require('./containers')
  ],
};
