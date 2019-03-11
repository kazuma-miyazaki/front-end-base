import HtmlWebpackPlugin from 'html-webpack-plugin'
import { dir }           from 'tools/dir'

// compile and export setting
// https://github.com/jantimon/html-webpack-plugin

const pages = [
  {
    template: '/template/index.ejs',
    filename: 'index.html'
  }, {
    template: '/template/form.ejs',
    filename: 'form.html',
    title   : 'Form HTML',
    meta    : {},
  }, {
    template: '/template/form.ejs',
    filename: 'pages/aaa.html',
  }
].map(page => new HtmlWebpackPlugin(
  Object.assign(page, { template: dir.join(dir.src, page.template) })
));

module.exports = {
  pages
}