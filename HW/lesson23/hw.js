function num_arr(arr_sqr) {
  let new_arr = [...arr_sqr];
  new_arr = new_arr
    .filter((el) => el % 2 == 0)
    .map((i) => i ** 2)
    .sort((a, b) => a - b);
  return new_arr;
}

let num = [53, 62, 102, 20, 12, 30, 123, 53, 62, 102, 20, 12, 30, 21, 15, 73];

console.log(num_arr(num));

// function num_arr(arr_sqr) {
//   let new_arr = [];
//   for (let i = 0; i < arr_sqr.length; i++)
//     if (arr_sqr[i] % 2 == 0) {
//       new_arr.push(arr_sqr[i] ** 2);
//     }
//   return new_arr;
// }

// let num = [53, 62, 102, 20, 12, 30, 123, 53, 62, 102, 20, 12, 30, 21, 15, 73];

// console.log(num_arr(num));
