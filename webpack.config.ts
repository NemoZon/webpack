import path from 'path';
// the html-webpack-plugin generates an HTML file for your application
// and automatically injects all your generated bundles into this file.
// https://webpack.js.org/concepts/#plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; //to access built-in plugins

type Mode = 'development' | 'production'

interface EnvVariables {
  mode: Mode
}

// https://webpack.js.org/guides/getting-started/#basic-setup
export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development', // development || production
    entry: './src/index.ts',
    output: {
      filename: '[name].[contenthash].js', // https://webpack.js.org/configuration/output/#template-strings
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new webpack.ProgressPlugin(),
    ],
  }
  return config
};