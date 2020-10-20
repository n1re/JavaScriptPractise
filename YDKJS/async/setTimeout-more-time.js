function hardWork(time) {
  const startDate = Date.now();
  const finishDate = startDate + time;
  while(Date.now() < finishDate) {}
  console.log('hardWork finished');
}

setTimeout(function callback() {
  console.log('callback finished'); // 4
}, 1000);

hardWork(10000);