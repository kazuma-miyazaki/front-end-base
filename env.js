/**
 *
 * - custom NODE_PATH and requires
 * @reference https://github.com/facebook/flow/issues/48
 *
--------------------------------------------------------------------- */



process.env.NODE_PATH = require('app-root-path').path;
require('module').Module._initPaths();
require('@babel/register');