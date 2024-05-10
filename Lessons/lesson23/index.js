let arr = [53, 62, 102, 20, 12, 30, 123, 53, 62, 102, 20, 12, 30, 21, 15, 73];

let new_array = arr.map((element) => element + 2); // дає можливість змінити кожний окремий елемент масиву
console.log(new_array);

console.log(typeof new_array[0]);

//////////////////////////////////////////////////////////////////////////////////////////////

let arr_words = ["john", "ball", "mama"];

let new_arr = arr_words.map((a) => a.toUpperCase() + "!");
console.log(new_arr);

//////////////////////////////////////////////////////////////////////////////////////////

let num = [53, 62, 102, 20, 12, 30, 123, 53, 62, 102, 20, 12, 30, 21, 15, 73];

let new_num = num.filter((element) => element > 50); // застосовує фільтр до кожного елементу масиву із заданими умовами

console.log(new_num);

////////////////////////////////////////////////////////////////////////////////////////////

let words = ["hello", "world", "house", "car", "pear", "pet", "car", "shop"];

let new_words = words.filter((el) => el.length >= 4);
console.log(new_words);

////////////////////////////////////////////////////////////////////////////////////////////

function arr_word_num(array) {
  let new_array = [...array];
  for (let i = 0; i < new_array.length; i++) {
    if (typeof new_array[i] == "number") {
      if (new_array[i] % 3 == 0) {
        console.log(new_array[i]);
      }
    }
  }
}

let word_num = [
  "hello",
  27,
  "world",
  "house",
  56,
  "car",
  3,
  "pear",
  "pet",
  11,
  "car",
  "shop",
];
console.log(arr_word_num(word_num));
