/**
 *
 * - HtmlWebpackPlugin
 * @see https://webpack.js.org/concepts/entry-points
 *
--------------------------------------------------------------------- */



const {
  src,
  resolve
} = require('tools/dir');



module.exports = {
  'app': resolve(src, 'entry/app.js'),
}

