'use strict';

/**
 * @todo learn, i solved it not by myself :(
 */

function getData() {
	return new Promise(resolve => {
		setTimeout(() => resolve(42), 1000)
	})
}

const memoized = memoize(getData, 1000);

memoized()
	.then(data1 => console.log(data1)) // получаем долго
	.then(memoized)
	.then(data2 => console.log(data2)) // получаем быстро, из кеша
	.then(memoized)
	.then(data3 => console.log(data3)) // получаем быстро, из кеша
	.then(() => {
	    setTimeout(() => {
        const m = memoized();
	      return m.then(data4 => console.log(data4)); // получаем долго, считается заново
	    }, 5000);
   });

function memoize(fn, timeout) {
  let cache = null;
  let expire = Date.now() + timeout;

  return function() {
      if (!cache || Date.now() > expire) {
        return fn().then(data => {
          cache = data;
          expire = Date.now() + timeout;
          return data;
        });
      }

    return Promise.resolve(cache);
  }
}