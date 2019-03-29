/**
 *
 * @see https://webpack.js.org/concepts
 *
--------------------------------------------------------------------- */



const mode      = require('webpackConfig/mode');
const entry     = require('webpackConfig/entry');
const output    = require('webpackConfig/output');
const devServer = require('webpackConfig/devServer');
const plugins   = [].concat(
  require('webpackConfig/pages'),
  require('webpackConfig/plugins'),
);
const module    = require('webpackConfig/modules');
const resolve   = require('webpackConfig/resolve');
const devtool   = require('webpackConfig/devtool');



exports.config = {
  mode,
  entry,
  output,
  devServer,
  plugins,
  module,
  resolve,
  devtool,
};
