import HtmlWebpackPlugin from 'html-webpack-plugin'
import { dir } from './tools/dir'

const pages = {
  index: {
    template: dir.join(dir.src.base, '/index.html'),
    filename: 'indx.html',
    // すべてのアセットを指定されたものに挿入
    // inject: true,
    // inject: 'body',
    // minify: {
    //   collapseWhitespace: true,
    //   removeComments: true
    // },
  }
}

module.exports = {
  pages: Object.keys()
}

module.exports = {
  pages: [
    // compile and export setting
    // https://github.com/jantimon/html-webpack-plugins
    new HtmlWebpackPlugin({
      // 指定した自作htmlに適用する、指定がなければ勝手にhtmlを生成
      template: dir.join(dir.src.base, '/index.html'),
      // 出力ファイル名
      filename: 'indx.html',
      // すべてのアセットを指定されたものに挿入
      // inject: true,
      // inject: 'body',
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true
      // },
    }),

    new HtmlWebpackPlugin({
      title   : 'Form HTML',
      filename: 'form.html',
      meta: {
        'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
        // Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
        // Which equals to the following http header: `Content-Security-Policy: default-src https:`
        'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
        // Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
        // Which equals to the following http header: `set-cookie: value; expires=date; path=url`
      },
      template: dir.join(dir.src.base, 'form.html'),
    }),

    new HtmlWebpackPlugin({
      template: dir.join(dir.src.base, '/template.ejs'),
      filename: 'template.html',
    }),
  ]
}