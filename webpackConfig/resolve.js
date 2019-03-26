const appRoot = require('app-root-path');



module.exports = {
  extensions: ['.js', '.jsx', 'html', 'ejs', 'css', 'scss'],
  alias     : {
    '@root': appRoot.path,
  }
};