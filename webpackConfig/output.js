/**
 * 
 * - Removal of *.hot-update.json files
 * @see https://github.com/gaearon/react-hot-loader/issues/456
 *
 --------------------------------------------------------------------- */



const dir = require('tools/dir');



module.exports = {
  path                  : dir.dist,
  filename              : '[name].bundle.js',
  hotUpdateChunkFilename: 'hot/hot-update.js',
  hotUpdateMainFilename : 'hot/hot-update.json'
};

