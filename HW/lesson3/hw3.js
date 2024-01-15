let apple = 5;
let pear = 7;
apple = apple - 2;
pear = pear - 2;
let result = apple + pear;
let enough = 10;
console.log(result);
if (result > enough) {
  console.log(`Hooray, I have so much fruit left, ${result}`);
} else {
  console.log(`i need ${enough - result}`);
}
