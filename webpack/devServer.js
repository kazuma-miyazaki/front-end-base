// https://webpack.js.org/configuration/dev-server/#devserver

module.exports = {
  devServer: {
    inline          : false,
    contentBase     : 'dist',
    watchContentBase: true,
    index           : '/index.html',
    port            : 8080,
    // public: 'myapp.test:8080',
    staticOptions   : {
      redirect: false
    },
    writeToDisk     : true,
    hot             : true
  }
}