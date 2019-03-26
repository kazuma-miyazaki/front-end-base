const { providePlugin }     = require('webpackConfig/plugins/webpack');
const cleanWebpackPlugin    = require('webpackConfig/plugins/cleanWebpackPlugin');
const interpolateHtmlPlugin = require('webpackConfig/plugins/interpolateHtmlPlugin');
const miniCssExtractPlugin  = require('webpackConfig/plugins/miniCssExtractPlugin');



module.exports = [
  providePlugin,
  cleanWebpackPlugin,
  interpolateHtmlPlugin,
  miniCssExtractPlugin
];
