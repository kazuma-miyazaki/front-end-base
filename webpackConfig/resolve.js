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
  react,
  style,
  template,
  config,
  webpackConfig
} = require('tools/dir');



module.exports = {
  extensions: ['.js', '.jsx', 'html', 'ejs', 'css', 'scss'],
  alias     : {
    '@root'         : root,
    '@src'          : src,
    '@dist'         : dist,
    '@react'        : react,
    '@style'        : style,
    '@template'     : template,
    '@config'       : config,
    '@webpackConfig': webpackConfig
  }
};
