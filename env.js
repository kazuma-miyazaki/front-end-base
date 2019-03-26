process.env.NODE_PATH = require('app-root-path').path;
require('module').Module._initPaths();
require('@babel/register');