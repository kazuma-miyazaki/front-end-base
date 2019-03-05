import CleanWebpackPlugin from 'clean-webpack-plugin'

// clear directory

module.exports = {
  cleanWebpackPlugin: new CleanWebpackPlugin(['dist'])
}