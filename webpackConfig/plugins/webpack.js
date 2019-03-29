/**
 *
 * @see https://webpack.js.org/plugins/
 *
--------------------------------------------------------------------- */



const {

  /**
   *
   * @see https://webpack.js.org/plugins/provide-plugin/
   *
  --------------------------------------------------------------------- */
  ProvidePlugin,

} = require('webpack');



module.exports = {
  providePlugin: new ProvidePlugin({
    _: 'underscore'
  })
}
