/**
 *
 * - prettier/prettier
 * @see https://github.com/prettier/prettier#api
 *
 * - hawkins/prettier-webpack-plugin
 * @see https://github.com/hawkins/prettier-webpack-plugin
 *
--------------------------------------------------------------------- */



const PrettierPlugin = require('prettier-webpack-plugin');



module.exports = new PrettierPlugin({
  tabWidth  : 4,
  useTabs   : false,
  encoding  : 'utf-8',
  extensions: [ '.html' ]
});

