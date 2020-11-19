function foo(callback) {
  setTimeout(function() {
        callback('A');
  }, Math.random()*100);
}

function bar(callback) {
  setTimeout(function() {
        callback('B');
  }, Math.random()*100);
}

function baz(callback) {
    setTimeout(function() {
          callback('C');
    }, Math.random()*100);
}

foo(letter => {
  console.log(letter);
  bar(letter => {
    console.log(letter);
    baz(letter => console.log(letter));
  })
});