import { dir } from 'tools/dir'

console.log("process.env.NODE_PATH: " + process.env.NODE_PATH);
console.log("dir.src.js: %o", dir.src.js);

module.exports = {
  /**
   * {object}
   *   key  : output file
   *   value: entry file
   */
  entry: {
    'app'       : dir.resolve(dir.src.js, 'app.jsx'),
    'pages/form': dir.resolve(dir.src.js, 'pages/form.js')
  }
} 


