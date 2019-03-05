import { providePlugin }         from './webpack'
import { cleanWebpackPlugin }    from './cleanWebpackPlugin'
import { interpolateHtmlPlugin } from './interpolateHtmlPlugin'
import { miniCssExtractPlugin }  from './miniCssExtractPlugin'

module.exports = {
  plugins: [
    providePlugin,
    cleanWebpackPlugin,
    interpolateHtmlPlugin,
    miniCssExtractPlugin
  ]
}