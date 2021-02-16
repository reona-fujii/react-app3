const { Module } = require("webpack");

Module.exports = {
  entry: './entry.js'
  output: {
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        options: {
          presets: ['react']
        }
      }
    ]
  }
};