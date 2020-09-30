'use strict';

function zip() {
  return Array
    .from(arguments)
    .reduce((acc, obj) => {
      Object
        .entries(obj)
        .forEach(([ key, value ]) => acc[key] === undefined && (acc[key] = value));
      return acc;
    }, {});
}