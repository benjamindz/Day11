var myNestedArray = [["Sutlija", 7]];

function myNestedFunction(arr) {
  var myNestedArray = [...arr];
  myNestedArray.pop();
  myNestedArray.push(["Toblerone", 5]);
  myNestedArray.push(["Milka", 3]);

  return myNestedArray;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;
