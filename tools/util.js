exports.replaceMustache = (str, obj) => {
  return Object.keys(obj).reduce((_str, key) =>
    _str.replace(new RegExp('\{\{' + key + '\}\}', 'g'), obj[key]), str
  );
}

exports.isString = str => {
  return typeof str === 'string';
};

exports.isString = str => {
  return typeof str === 'string';
};

exports.isObject = list => {
  return typeof obj === 'object' && obj !== null;
};


