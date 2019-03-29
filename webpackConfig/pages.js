/**
 *
 * - HtmlWebpackPlugin
 * @see https://github.com/jantimon/html-webpack-plugins
 *
--------------------------------------------------------------------- */



const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  pagesBaseConfigArray
} = require('config/getter');



module.exports = pagesBaseConfigArray().map(config =>
  new HtmlWebpackPlugin(config)
);
