
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { mode }  from 'tools/mode'

module.exports = {
  miniCssExtractPlugin: new MiniCssExtractPlugin({
    filename     : mode.development ? '[name].css' : '[name].[hash].css',
    chunkFilename: mode.development ? '[id].css'   : '[id].[hash].css',
  }),
}