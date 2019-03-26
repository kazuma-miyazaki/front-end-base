/**
 *
 * - MiniCssExtractPlugin
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 *
 --------------------------------------------------------------------- */



const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode                 = require('tools/mode');



const filename      = mode.development ? '[name].css' : '[name].[hash].css';
const chunkFilename = mode.development ? '[id].css'   : '[id].[hash].css';



module.exports = new MiniCssExtractPlugin({ filename, chunkFilename });