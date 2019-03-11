import appRoot from 'app-root-path'

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', 'html', 'ejs', 'css', 'scss'],
    alias     : {
      '@root': appRoot.path,
    }
  }
}