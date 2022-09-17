const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './public/build');
const APP_DIR = path.resolve(__dirname, './client');

module.exports = {
  mode: 'development',
  entry: APP_DIR + '/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/public/build/',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        }
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{loader: '@svgr/webpack', options: {icon: true}}],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@app': '/client/src'
    }
  },
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
}