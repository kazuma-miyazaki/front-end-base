const ejs  = require('webpackConfig/modules/ejs');
const js   = require('webpackConfig/modules/js');
const sass = require('webpackConfig/modules/sass');
const img  = require('webpackConfig/modules/img');



module.exports = {
  rules: [
    ejs,
    js,
    sass,
    img
  ]
};

