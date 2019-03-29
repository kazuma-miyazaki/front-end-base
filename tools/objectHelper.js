
exports.mergeObjectArray = objList => {
  return objList.reduce((obj, listMemberObj) => Object.assign(obj, listMemberObj), {});
};

