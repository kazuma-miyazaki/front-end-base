
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { developmentMode }  from './../tools/mode'

module.exports = {
  miniCssExtractPlugin: new MiniCssExtractPlugin({
    filename     : developmentMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: developmentMode ? '[id].css'   : '[id].[hash].css',
  }),
}