import appRoot from 'app-root-path'
import { dir } from './tools/dir'

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', 'html', 'ejs', 'css', 'scss'],
    alias     : {
      '@root'        : appRoot.path,
      '@src_js'      : dir.src.js,
      '@src_style'   : dir.src.style,
      '@src_images'  : dir.src.images,
      '@dist_js'     : dir.dist.js,
      '@dist_style'  : dir.dist.style,
      '@dist_images' : dir.dist.images,
    }
  }
}