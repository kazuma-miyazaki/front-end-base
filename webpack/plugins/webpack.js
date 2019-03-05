import webpack from 'webpack'

// import webpack plugins

module.exports = {
  providePlugin: new webpack.ProvidePlugin({
    _: 'underscore'
  }),
}