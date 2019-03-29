/**
 *
 * - MiniCssExtractPlugin
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 *
--------------------------------------------------------------------- */



const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { development }      = require('tools/mode');



const filename      = development ? '[name].css' : '[name].[hash].css';
const chunkFilename = development ? '[id].css'   : '[id].[hash].css';



module.exports = new MiniCssExtractPlugin({ filename, chunkFilename });