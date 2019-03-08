import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// https://github.com/okonet/ejs-loader

module.exports = {
  sass: {
    test: /\.(s[a|c]ss|css)$/,
    use: [
      {
        loader : MiniCssExtractPlugin.loader,
        options: {
          publicPath: '/assets/',
        }
      },
      'css-loader',
      'sass-loader'
    ]
  }
}