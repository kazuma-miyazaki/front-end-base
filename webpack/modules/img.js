import path                from 'path'
import { developmentMode } from './../tools/mode'
import { dir }             from './../tools/dir'

// https://github.com/webpack-contrib/file-loader

module.exports = {
  img: {
    test: /\.(png|jpg|gif|svg)$/,
    use : [
      {
        loader : 'file-loader',
        options: {
          name() {
            return developmentMode ? '[name].[hash].[ext]' : '[name].[ext]'
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