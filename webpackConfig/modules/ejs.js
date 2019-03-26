/**
 *
 * @see https://github.com/okonet/ejs-loader
 *
 --------------------------------------------------------------------- */



module.exports = {
  test  : /\.ejs$/,
  loader: 'ejs-loader',
  query : {
    variable   : 'data',
    interpolate: '\\{\\{(.+?)\\}\\}',
    evaluate   : '\\[\\[(.+?)\\]\\]'
  }
};
