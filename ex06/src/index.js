function multiplyArrayFunction(myArray) {
  var arr = [];
  var sum = 0;
  var product = 1;

  for (i = 0; i < myArray.length; i++) {
    for (j = 0; j < myArray[i].length; j++) {
      sum += myArray[i][j];
      product *= myArray[i][j];
    }
  }
  arr.push(product);
  arr.push(sum);
  return arr;
}

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multiplyArrayFunction([[1, 2],[3, 4, 5, 6],[7, 8, 9]])
);
module.exports = multiplyArrayFunction;
