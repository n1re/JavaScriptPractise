try {
  let a = 2
  // here interpreter will treat expression like a call of 2 number,
  // because it is no ;
  // so it will throw type error, because 2 is not a function.
  (function(){console.log(3)})
} catch(err) {
  console.error(err)
}