import HtmlWebpackPlugin from 'html-webpack-plugin'
import { dir }           from 'tools/dir'

// compile and export setting
// https://github.com/jantimon/html-webpack-plugins

const pages = {
  1: {
    template: 'index.html',
    filename: 'index.html'
  },
  2: {
    template: 'form.html',
    filename: 'form.html',
    title   : 'Form HTML',
    meta    : {
      'Content-Security-Policy': {
        'http-equiv': 'Content-Security-Policy',
        'content'   : 'default-src https:'
      },
      'set-cookie': {
        'http-equiv': 'set-cookie',
        'content'   : 'name=value; expires=date; path=url'
      },
    }
  },
  3: {
    template: '/template/template.ejs',
    filename: 'pages/aaa.html',
  }
}

module.exports = {
  pages: Object.keys(pages).map(pageID => {
    pages[pageID].template = dir.join(dir.src.base, pages[pageID].template)
    return new HtmlWebpackPlugin(pages[pageID]);
  })
};