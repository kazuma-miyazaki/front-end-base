import { pages }     from './pages'
import { plugins }   from './plugins/'
import { module }    from './modules/'
import { entry }     from './entry'
import { output }    from './output'
import { devServer } from './devServer'
import { resolve }   from './resolve'

console.log("devServer: %o", devServer)

module.exports = {
  mode: 'development',

  entry,

  output,

  devServer,

  plugins: [].concat(pages, plugins),

  module,

  resolve
}
