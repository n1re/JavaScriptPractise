'use strict';

function work(ms) {
  const finishMs = Date.now() + ms;
  while (Date.now() < finishMs) {}
}

const INTERVAL_LABEL = 'setInterval started at';
let counter = 0;

console.log('interval 100 start time is unpredictable: ');
console.time(INTERVAL_LABEL);

const ID = setInterval(() => {
  console.timeLog(INTERVAL_LABEL);
  work(50);
  if (++counter === 3) {
    clearInterval(ID);
    console.log('But interval through timeouts 100 start time is much more predictable, because it doesn\'t : ');
    startTimeout();
  }
}, 100);

function startTimeout() {
  const TIMEOUT_LABEL = 'setTimeout started at';
  counter = 0;

  console.time(TIMEOUT_LABEL);

  const doWorkAndRelaunch = () => {
    console.timeLog(TIMEOUT_LABEL);
    work(50);
    if (++counter !== 3) {
      setTimeout(doWorkAndRelaunch, 100);
    }
  };

  setTimeout(doWorkAndRelaunch, 100);
}

