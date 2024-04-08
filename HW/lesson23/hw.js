function num_arr(arr_sqr) {
  let new_arr = [...arr_sqr];
  new_arr = new_arr.filter((el) => el % 2 == 0);
  console.log(new_arr);
  new_arr = new_arr.map((i) => i ** 2);
  return new_arr;
}

let num = [53, 62, 102, 20, 12, 30, 123, 53, 62, 102, 20, 12, 30, 21, 15, 73];

console.log(num_arr(num));

// function num_arr(arr_sqr) {
//     let new_arr = [...arr_sqr];
//     for (let i = 0; i < new_arr.length; i++)
//       if (new_arr[i] % 2 == 0) {
//         new_arr.map((i) => i ** 2);
//       }
//     return new_arr;
//   }

//   let num = [53, 62, 102, 20, 12, 30, 123, 53, 62, 102, 20, 12, 30, 21, 15, 73];

//   console.log(num_arr(num));
