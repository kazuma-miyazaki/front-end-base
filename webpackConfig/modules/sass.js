const MiniCssExtractPlugin = require('mini-css-extract-plugin');



// https://github.com/okonet/ejs-loader



module.exports = {
  test: /\.(s[a|c]ss|css)$/,
  use: [
    {
      loader : MiniCssExtractPlugin.loader,
      options: {
        // publicPath: '',
      }
    },
    'css-loader',
    'sass-loader'
  ]
};
