/**
 *
 * - mcmath/ejs-html-loader
 * @see https://github.com/mcmath/ejs-html-loader
 *
 * - webpackで静的サイトジェネレータ(EJS編)
 * @see https://qiita.com/kn1cht/items/d3fcd3376ab3461bf05a
 *
--------------------------------------------------------------------- */



module.exports = {
  test: /\.ejs$/,
  use : [ 'html-loader', 'ejs-html-loader' ]
};
