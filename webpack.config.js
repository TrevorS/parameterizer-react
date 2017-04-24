const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyWebpackPlugin = new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, 'src', 'options.html'),
    to: path.resolve(__dirname, 'dist'),
  },
  {
    from: path.resolve(__dirname, 'src', 'manifest.json'),
    to: path.resolve(__dirname, 'dist'),
  },
]);

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    background: './background.ts',
    options: './options.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    copyWebpackPlugin,
  ],
};

module.exports = config;
