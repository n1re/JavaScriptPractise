'use strict';

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const promises = [
    delay(65).then(() => 10),
    delay(100).then(() => { throw 'my error'; })
];

allSettled(promises)
  .then(results => console.log(results));

function allSettled(promises) {
  const resolvable = [];
  for (const promise of promises) {
    resolvable.push(new Promise(resolve => {
      promise
        .then(res => resolve({ status: 'resolved', value: res }))
        .catch(err => resolve({ status: 'rejected', reason: err }))
    }));
  }

  return Promise.all(resolvable);
}