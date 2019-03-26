const mode      = require('tools/mode');
const pages     = require('webpackConfig/pages');
const plugins   = require('webpackConfig/plugins');
const module    = require('webpackConfig/modules');
const entry     = require('webpackConfig/entry');
const output    = require('webpackConfig/output');
const devServer = require('webpackConfig/devServer');
const resolve   = require('webpackConfig/resolve');



exports.config = {
  mode: mode.is,
  entry,
  output,
  devServer,
  plugins: [].concat(pages, plugins),
  module,
  resolve,
  devtool: '#inline-source-map'
};
