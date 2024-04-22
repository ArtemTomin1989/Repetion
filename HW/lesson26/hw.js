function big_num(num_arr) {
  let new_arr = [];
  for (let i = 1; i < num_arr.length; i++) {
    if (num_arr[i] > num_arr[i - 1] && num_arr[i] > num_arr[i + 1]) {
      new_arr.push(num_arr[i]);
    }
  }
  return new_arr;
}

let rand_num_arr = [1, 3, 5, 2, 7, 4, 6];

console.log(big_num(rand_num_arr));
