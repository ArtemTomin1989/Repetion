function reverseLetters(array) {
  let reversed = [];
  for (i = 0; i < array.length; i++) {
    reversed.push(array[i]);
  }
  reversed.reverse();
  let result = reversed.concat(array);
  return result;
}
let arr_letters = ["a", "b", "c"];
console.log(reverseLetters(arr_letters));
