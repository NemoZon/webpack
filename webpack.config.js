const path = require('path');
// https://webpack.js.org/guides/getting-started/#basic-setup
module.exports = {
  mode: 'production', // development || production
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // https://webpack.js.org/configuration/output/#template-strings
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
};