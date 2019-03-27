/**
 *
 * - Resolve | webpack
 * @see https://webpack.js.org/configuration/resolve/
 *
 --------------------------------------------------------------------- */



const {
  root,
  src,
  dist,
  template
} = require('tools/dir');



module.exports = {
  extensions: ['.js', '.jsx', 'html', 'ejs', 'css', 'scss'],
  alias     : {
    '@root'    : root,
    '@src'     : src,
    '@dist'    : dist,
    '@template': template
  }
};
