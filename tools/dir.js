import appRoot from 'app-root-path'
import path    from 'path'

const makeDir = () => {
  const root        = appRoot.path;
  const webpackDir  = path.join(appRoot.path, 'webpack');
  const distDir     = path.join(root, 'dist');
  const srcDir      = path.join(root, 'src');
  const templateDir = path.join(srcDir, 'template');

  return {
    root,
    webpack : webpackDir,
    dist    : distDir,
    src     : srcDir,
    template: templateDir,
    join    : (_dir,   _file)  => path.join(_dir, _file),
    resolve : (_path1, _path2) => path.resolve(_path1, _path2),
    relative: (_path1, _path2) => path.relative(_path1, _path2),
    templateFile: _file => path.relative(templateDir, _file),
  }
}

module.exports = {
  dir: makeDir()
}