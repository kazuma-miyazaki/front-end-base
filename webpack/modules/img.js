import path     from 'path'
import { mode } from 'tools/mode'
import { dir }  from 'tools/dir'

// https://github.com/webpack-contrib/file-loader

console.log("mode.developmennt: %o", mode);

const outputFileName = mode.developmennt
  ? '[name].[ext]'
  : '[name].[hash].[ext]'

module.exports = {
  img: {
    test: /\.(png|jpg|gif|svg)$/,
    use : [
      {
        loader : 'file-loader',
        options: {
          name() {
            return outputFileName
          },
          outputPath(resource, resourcePath) {
            return path.join(resourcePath.replace(dir.src.base + '/', ''))
          },
          publicPath(resource, resourcePath) {
            return path.join(path.relative(dir.src.style, dir.src.assets), resourcePath.replace(dir.src.base + '/', ''))
          }
        },
      }
    ],
  }
}