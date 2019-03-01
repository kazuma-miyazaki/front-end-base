import path from 'path'

const makeDir = dirName => {
  const _makeDirPath = _base => {
    const _assets = path.join(_base, 'assets')

    return {
      base  : _base,
      assets: _assets,
      js    : path.join(_assets, 'js'),
      style : path.join(_assets, 'style'),
      images: path.join(_assets, 'images'),
    }
  };

  return {
    join: (dir, file) => path.join(dir, file),
    src : _makeDirPath(path.join(dirName, 'src')),
    dist: _makeDirPath(path.join(dirName, 'dist')),
  }
}

module.exports = {
  makeDir
}