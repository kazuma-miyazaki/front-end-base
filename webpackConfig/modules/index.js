const ejs  = require('webpackConfig/modules/ejs');
const js   = require('webpackConfig/modules/js');
const style = require('webpackConfig/modules/style');
const img  = require('webpackConfig/modules/img');



module.exports = {
  rules: [
    ejs,
    js,
    style,
    img
  ]
};

