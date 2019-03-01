require('@babel/register');
module.exports = require('./webpack/development').makeDevelopment(__dirname);