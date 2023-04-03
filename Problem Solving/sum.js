// Sum of All Numbers in an Array

var num = [1, 2, 4];
var sum = num.reduce(function (a, b) {
  return a + b;
});

console.log(sum);
