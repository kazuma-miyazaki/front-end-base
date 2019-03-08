import appRoot from 'app-root-path'
import path    from 'path'

const makeDir = () => {
  const _makeDirPath = base => {
    const assets = path.join(base, 'assets')

    return {
      base,
      assets,
      js    : path.join(assets, 'js'),
      style : path.join(assets, 'style'),
      images: path.join(assets, 'images'),
    }
  };

  const root    = appRoot.path;
  const webpack = path.join(appRoot.path, 'webpack');
  const src     = _makeDirPath(path.join(appRoot.path, 'src'));
  const dist    = _makeDirPath(path.join(appRoot.path, 'dist'));

  return {
    root,
    webpack,
    src,
    dist,
    join    : (_dir,   _file)  => path.join(_dir, _file),
    resolve : (_path1, _path2) => path.resolve(_path1, _path2),
    relative: (_path1, _path2) => path.relative(_path1, _path2)
  }
}

module.exports = {
  dir: makeDir()
}