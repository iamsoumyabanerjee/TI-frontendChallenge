const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 5678
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,  
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }    
    }, {
      test: /\.(css|scss)$/,
      exclude: [/node_modules/],
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: [/\.jpe?g$/, /\.svg$/, /\.gif$/, /\.png$/],
      loader: require.resolve('url-loader'),
      options:{
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }, {
      test: [/\.jpe?g$/, /\.svg$/, /\.gif$/, /\.png$/],
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    })
  ]
}