/**
 *
 * @see https://github.com/webpack-contrib/file-loader
 *
 --------------------------------------------------------------------- */



const path = require('path');
const mode = require('tools/mode');
const dir  = require('tools/dir');



const outputFileName = mode.development
  ? '[name].[ext]'
  : '[name].[hash].[ext]';



const fileLoader = {
  loader : 'file-loader',

  options: {
    name() {
      return outputFileName;
    },

    outputPath(resource, resourcePath) {
      console.log('outputPath: %o', path.join(resourcePath.replace(dir.src + '/', '')));
      return path.join(resourcePath.replace(dir.src + '/', ''));
    },

    // publicPath(resource, resourcePath) {
    //   return path.join(path.relative(dir.src.style, dir.src.assets), resourcePath.replace(dir.src + '/', ''))
    // }
  }
};



module.exports = {
  test: /\.(png|jpg|gif|svg)$/,
  use : [ fileLoader ],
}