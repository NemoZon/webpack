const path = require('path');
// the html-webpack-plugin generates an HTML file for your application
// and automatically injects all your generated bundles into this file.
// https://webpack.js.org/concepts/#plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://webpack.js.org/guides/getting-started/#basic-setup
module.exports = (env) => ({
  mode: env.mode ?? 'development', // development || production
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // https://webpack.js.org/configuration/output/#template-strings
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })],
});