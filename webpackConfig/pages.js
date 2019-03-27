/**
 *
 * - HtmlWebpackPlugin
 * @see https://github.com/jantimon/html-webpack-plugins
 *
 --------------------------------------------------------------------- */



const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  mergeObject
} = require('tools/objectHelper');
const {
  join,
  src,
} = require('tools/dir');



module.exports = [
  {
    template: 'template/index.ejs',
    filename: 'index.html'
  },

  {
    template: 'template/form.ejs',
    filename: 'form.html',
    title   : 'Form HTML',
    meta    : {},
  },

].map(page => new HtmlWebpackPlugin(
  mergeObject([page, { template: join(src, page.template) }])
));
