/**
 *
 * @see https://github.com/okonet/ejs-loader
 *
--------------------------------------------------------------------- */



const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
  test: /\.(s[a|c]ss|css)$/,
  use : [
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
