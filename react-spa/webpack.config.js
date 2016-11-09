var webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'build.js',
  },
  devServer: {
    port: 3333,
    // historyApiFallback: true
  },
  module: {
    loaders: [
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=819200',
      }, 
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules/,
        loader: 'babel',
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.scss$/,
        loader: "style!css!sass?sourceMap",
      }, {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]',
      },
    ]
  },
  
  // externals: {
  //   react: 'window.React'
  //  },
  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: [
      'es2015', 'stage-0', 'react',
    ],
    plugins: [
      'transform-runtime',
      [
        "antd", {
          style: "css"
        },
      ],
    ],
  }
};

  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
