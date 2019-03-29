const {
  isString,
  isObject
} = require('tools/util');



exports.objectToArray = o => {
  return isObject(o) ? Object.keys(o) : [];
};


