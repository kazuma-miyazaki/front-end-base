// https://github.com/okonet/ejs-loader

module.exports = {
  ejs: {
    test  : /\.ejs$/,
    loader: 'ejs-loader',
    query : {
      variable   : 'data',
      interpolate: '\\{\\{(.+?)\\}\\}',
      evaluate   : '\\[\\[(.+?)\\]\\]'
    }
  }
}