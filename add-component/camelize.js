function camelize(str){
  const arr = str.split('-');
  const capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item);
  const capitalString = capital.join("");

  return capitalString;
}

module.exports = camelize;