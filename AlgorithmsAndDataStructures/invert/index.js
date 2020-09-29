function revert(obj) {
  return Object
    .entries(obj)
    .reduce((acc, [key, item]) => {
      acc[item] = key;
      return acc;
    }, {});
}

module.exports = revert;