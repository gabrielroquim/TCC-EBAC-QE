const path = require('path');
require ('dotenv').config()

module.exports = {
  mode: 'development',
  entry: {
    login: './simulations/login.test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].test.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};