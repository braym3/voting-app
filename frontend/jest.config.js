module.exports = {
    // jest configuration options
    transform: {
      '^.+\\.vue$': 'vue3-jest',
      '^.+\\.js$': 'babel-jest',
    },
    setupFiles: ['esm'],
  };