import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// https://github.com/okonet/ejs-loader

module.exports = {
  sass: {
    test: /\.(s[a|c]ss|css)$/,
    use: [
      {
        loader : MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
          // publicPath: '../test'
          publicPath: '/assets/',
        }
      },
      'css-loader',
      // https://github.com/postcss/postcss-loader
      // http://stech.machiiro.jp/entry/2017/03/27/142326
      // 'postcss-loader',
      'sass-loader'
    ]
  }
}