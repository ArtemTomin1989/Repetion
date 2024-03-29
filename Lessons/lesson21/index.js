// треба повернути масив["слово apple має символів 5 ", "слово car має символів 3", ...]

function arr_words(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(`слово ${array[i]} має символів ${array[i].length}`);
  }
  return result;
}
let words = ["apple", "car", "home", "home", "orange", "buuper", "orange"];

console.log(arr_words(words));
