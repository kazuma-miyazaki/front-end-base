/**
 *
 * - HtmlWebpackPlugin
 * @see https://github.com/jantimon/html-webpack-plugins
 *
 --------------------------------------------------------------------- */



const HtmlWebpackPlugin = require('html-webpack-plugin');
const dir               = require('tools/dir');



module.exports = [
  {
    template: '/template/index.ejs',
    filename: 'index.html'
  },

  {
    template: '/template/form.ejs',
    filename: 'form.html',
    title   : 'Form HTML',
    meta    : {},
  },

  {
    template: '/template/form.ejs',
    filename: 'pages/aaa.html',
  }

].map(page => new HtmlWebpackPlugin(
  Object.assign(page, { template: dir.join(dir.src, page.template) })
));

