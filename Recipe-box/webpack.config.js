
module.exports = {
  entry: './index.js',
  output: {
    path: './output',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true, // live reload on the browser
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          // presets: ['es2015']
          presets: ['es2015', 'es2016', 'stage-2', 'stage-3', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  }
};
