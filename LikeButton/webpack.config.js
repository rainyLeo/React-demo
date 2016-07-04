var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // HtmlWebpackPlugin
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin(
  {template: './index.html', filename: 'index.html', inject: 'body', }
);

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // enable websocket connection(needs url and port)
    'webpack/hot/dev-server', // to perform HMR in the browser
    './index.js',
  ], 
  output: {
    path: __dirname + '/dist', // output path with loaders
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
          presets: ['es2015']
        },
      }
    ]
  },

  plugins: [
    HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()
  ], 
  devServer: {
    hot: true // enable HMR in webpack-dev-server and in libs running in the browser
  },
};
