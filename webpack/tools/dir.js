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
    join            : (_dir,   _file)  => path.join(_dir, _file),
    relative        : (_path1, _path2) => path.relative(_path1, _path2),
    relativeWithRoot: _path => path.relative(root,      _path),
    relativeWithSrc : _path => path.relative(src.base,  _path),
    relativeWithDist: _path => path.relative(dist.base, _path)
  }
}

module.exports = {
  dir: makeDir()
}