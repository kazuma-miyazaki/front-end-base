import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import InterpolateHtmlPlugin from'interpolate-html-plugin'

const dir = Object.freeze({
  src : path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
});

export default {
  mode: 'development',
  entry: dir.src + '/index.jsx',

  output: {
    path: dir.dist,
    filename: 'bundle.js'
  },

  // https://webpack.js.org/configuration/dev-server/#devserver
  devServer: {
    contentBase: 'dist',
    watchContentBase: true,
    index: '/index.html',
    port: 8080,
    // public: 'myapp.test:8080',
    staticOptions: {
      redirect: false
    },
    writeToDisk: true,
    hot: true
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
    // clear directory
    new CleanWebpackPlugin(['dist']),

    // compile and export setting
    new HtmlWebpackPlugin({
      // 指定した自作htmlに適用する、指定がなければ勝手にhtmlを生成
      template: dir.src + '/index.html',
      // 出力ファイル名
      filename: 'index.html',
      // すべてのアセットを指定されたものに挿入
      // inject: true
    }),

    // 複数ファイルの指定も可能
    // new HtmlWebpackPlugin({
    //   filename: "admin.html",
    //   template: "./html/admin.html"
    // }),

    // KeyでHTML内の"%指定した文字列%"をValueに置き換える
    new InterpolateHtmlPlugin({
      bootstrap_css_cdn: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css'
    })
  ]
}