import { mode }      from 'tools/mode'
import { pages }     from 'webpack/pages'
import { plugins }   from 'webpack/plugins/'
import { module }    from 'webpack/modules/'
import { entry }     from 'webpack/entry'
import { output }    from 'webpack/output'
import { devServer } from 'webpack/devServer'
import { resolve }   from 'webpack/resolve'



export default {
  mode: mode.is,

  entry,

  output,

  devServer,

  plugins: [].concat(pages, plugins),

  module,

  resolve
}
