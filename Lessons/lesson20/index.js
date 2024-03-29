let arr_num = [2, 5, 78, 54, 236, 100, 216];
arr_num.sort();
console.log(arr_num);
arr_num.sort(function (a, b) {
  return a - b;  //істинне сортування чисел
});
console.log(arr_num);

let a = 5;
let b = `wer`;

console.log(typeof a);

console.log(typeof b);

console.log(typeof arr_num);

//////////////////////////////////////////////////////////////////////////////////////

function big_string(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      result.push(array[i].toUpperCase());
    }
  }
  result.sort();
  return result;
}

let arr_num_words = ["wer", 5, "apples", 65, "cheese", 100, "art", "Bombarda"];

console.log(big_string(arr_num_words));
