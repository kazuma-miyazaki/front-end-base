import { dir } from './tools/dir'

const filePath = file => dir.join(dir.src.js, file)

module.exports = {
  // key  : output target directory
  // value: include target file path
  entry: {
    'app'       : filePath('app.jsx'),
    'pages/form': filePath('pages/form.js')
  }
}