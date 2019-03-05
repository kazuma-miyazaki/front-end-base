import { ejs }  from './ejs'
import { js }   from './js'
import { sass } from './sass'
import { img }  from './img'

module.exports = {
  module: {
    rules: [
      ejs,
      js,
      sass,
      img
    ]
  }
}