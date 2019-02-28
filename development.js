import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const srcDirPath  = path.resolve(__dirname, 'src');
const distDirPath = path.resolve(__dirname, 'dist');

export default {
  mode: 'development',
  entry: srcDirPath + '/index.jsx',

  output: {
    path: distDirPath,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: srcDirPath + '/index.html',
      filename: 'index.html'
    })
  ]
}