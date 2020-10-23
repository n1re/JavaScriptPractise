const assert = require('assert');

function namespace(path: string): object {
  const _path: string[] = path.split('.');
  return _path.reduceRight((acc, key) => ({ [key]: acc }), {});
}

console.log(namespace('a.b.c.d'));