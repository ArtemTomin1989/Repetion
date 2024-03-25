function sortMixedArray(array) {
  let numbers = [];
  let words = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      numbers.push(array[i]);
    } else if (typeof array[i] === "string") {
      words.push(array[i].toUpperCase());
    }
  }

  numbers.sort((a, b) => a - b); // Сортування чисел за зростанням
  words.sort(); // Сортування слів в алфавітному порядку

  return numbers.concat(words);
}

let arr = [58, "wer", "bomba", "343", 11, "cran", 8];
console.log(sortMixedArray(arr));
