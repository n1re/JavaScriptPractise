'use strict';

exports.get = (obj, path, defaultValue, separator = '.') => {
  const keys = path.split(separator);

  let output = obj;

  for (const key of keys) {
    const next = output[key];

    if (next === undefined) return defaultValue;

    output = next;
  }

  return output;
}