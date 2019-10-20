const path = require('path');

module.exports = {
  mode: 'development',
  entry: './build/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'javascripts/bundle.js'
  }
};