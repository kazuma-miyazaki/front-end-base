exports.mergeObject = (objList) => {
  return objList.reduce((obj, listMemberObj) => Object.assign(obj, listMemberObj), {});
}
