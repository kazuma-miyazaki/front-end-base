import { dir } from 'tools/dir'

module.exports = {
  /**
   * {object}
   *   key  : output file
   *   value: entry  file
   */
  entry: {
    'app': dir.resolve(dir.src, 'entry/app.js'),
  }
}
