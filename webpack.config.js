var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};

config.module.loaders.push({  
  test: /\.js[x]?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ['es2015', 'react']},
});

config.module.loaders.push({
  test: /\.(scss|css)$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader'],
});

module.exports = config;
