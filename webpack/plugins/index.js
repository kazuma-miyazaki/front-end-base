import { providePlugin }         from 'webpack/plugins/webpack'
import { cleanWebpackPlugin }    from 'webpack/plugins/cleanWebpackPlugin'
import { interpolateHtmlPlugin } from 'webpack/plugins/interpolateHtmlPlugin'
import { miniCssExtractPlugin }  from 'webpack/plugins/miniCssExtractPlugin'

module.exports = {
  plugins: [
    providePlugin,
    cleanWebpackPlugin,
    interpolateHtmlPlugin,
    miniCssExtractPlugin
  ]
}