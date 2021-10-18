module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      screen: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }