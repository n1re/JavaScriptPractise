/**
 * @todo learn, i solved it not by myself :(
 */

Promise.prototype.finally = function (fn) {
  const onFinally = callback => Promise.resolve(fn()).then(callback);
  return this.then(
    result => onFinally(() => result),
    reason => onFinally(() => Promise.reject(reason))
  );
}