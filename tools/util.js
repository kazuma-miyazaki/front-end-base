exports.replaceMustache = (s, o) => {
  return Object.keys(o).reduce((_s, key) =>
    _s.replace(new RegExp('\{\{' + key + '\}\}', 'g'), o[key]), s
  );
}



exports.isString = s => {
  return typeof s === 'string';
};



exports.isObject = o => {
  return typeof o === 'object' && o !== null;
};



exports.returnArgs = (args) => {
  return (() => args )();
}