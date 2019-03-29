/**
 *
 * @see https://webpack.js.org/configuration/dev-server/#devserver
 *
--------------------------------------------------------------------- */



module.exports = {
  inline          : false,
  contentBase     : 'dist',
  watchContentBase: true,
  index           : '/index.html',
  port            : 8888,
  staticOptions   : { redirect: false },
  writeToDisk     : true,
  hot             : true
};
