
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //HtmlWebpackPlugin
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',//enable websocket connection(needs url and port)
    'webpack/hot/dev-server', //to perform HMR in the browser
    './app/index.js'  //your app's entry point
  ],
  output: {
    path: __dirname + '/dist',  //output path with loaders
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"]}
    ]
  },

  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin() // to generate hot update chunks
  ],
  devServer: {
    hot: true  // enable HMR in webpack-dev-server and in libs running in the browser

  }
};
