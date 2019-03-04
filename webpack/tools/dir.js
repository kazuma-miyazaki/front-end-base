import path from 'path'

const makeDir = dirname => {
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
    join : (dir, file) => path.join(dir, file),
    src : _makeDirPath(path.join(dirname, 'src')),
    dist: _makeDirPath(path.join(dirname, 'dist')),
  }
}

module.exports = {
  makeDir
}