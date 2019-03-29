const appRoot = require('app-root-path');
const path    = require('path');
const dir     = (() => {
  const root             = appRoot.path;
  const webpackDir       = path.join(appRoot.path, 'webpack');
  const srcDir           = path.join(root,         'src');
  const distDir          = path.join(root,         'dist');
  const configDir        = path.join(root,         'config');
  const reactDir         = path.join(srcDir,       'react');
  const styleDir         = path.join(srcDir,       'style');
  const templateDir      = path.join(srcDir,       'template');
  const webpackConfigDir = path.join(srcDir,       'webpackConfig');

  return {
    root,
    webpack      : webpackDir,
    src          : srcDir,
    dist         : distDir,
    template     : templateDir,
    react        : reactDir,
    style        : styleDir,
    config       : configDir,
    webpackConfig: webpackConfigDir,
    join         : (_dir,   _file)  => path.join(_dir, _file),
    resolve      : (_path1, _path2) => path.resolve(_path1, _path2),
    relative     : (_path1, _path2) => path.relative(_path1, _path2),
    templateFile : _file => path.relative(templateDir, _file),
  }
})();



module.exports = dir;
