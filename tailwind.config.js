module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
       'skeuomorphic': [
          'inset 0 -1.5px 1px rgba(74, 50, 40, 0.1)', // First inner shadow
          'inset 0 1.5px 1px rgba(255, 255, 255, 0.75)',   // Second inner shadow
          '0 0 0 1px rgba(74, 50, 40, 0.07)',            // Drop shadow
        ].join(', ')

    },
  },
  plugins: [],
}
}