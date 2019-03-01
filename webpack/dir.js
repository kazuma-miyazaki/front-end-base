import path from 'path'

const makeDir = dirName => {
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

  return {
    join: (dir, file) => path.join(dir, file),
    src : _makeDirPath(path.join(dirName, 'src')),
    dist: _makeDirPath(path.join(dirName, 'dist')),
  }
}

module.exports = {
  makeDir
}