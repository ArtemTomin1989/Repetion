function num(arr_1, arr_2) {
  let new_array = arr_1.concat(arr_2);
  console.log(new_array);
  new_array.sort(function (a, b) {
    return b - a;
  });
  console.log(new_array);
  return new_array;
}

let arr_num_1 = [5, 7, 8, 34, 6778, 100];
let arr_num_2 = [
  53, 62, 102, 20, 12, 30, 123, 53, 62, 102, 20, 12, 30, 21, 15, 73,
];

console.log(num(arr_num_1, arr_num_2));
