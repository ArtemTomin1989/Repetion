let arrPn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrPn2 = [1, 2, 3, 4, 5];
function clpn(array) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
  return array;
}
console.log(clpn(arrPn)); //виклик функції
console.log(clpn(arrPn2)); //виклик функції
console.log(clpn(123)); //виклик функції
