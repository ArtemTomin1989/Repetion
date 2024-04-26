function big_num(num_arr) {
  let new_arr = [...num_arr];
  new_arr.push(0);
  new_arr.unshift(0);
  let result = [];
  for (let i = 0; i < new_arr.length; i++) {
    if (new_arr[i] > new_arr[i - 1] && new_arr[i] > new_arr[i + 1]) {
      result.push(new_arr[i]);
    }
  }
  return result;
}

let rand_num_arr = [10, 3, 5, 2, 7, 4, 6];

console.log(big_num(rand_num_arr));

console.log(rand_num_arr[4]); // звертання до контретного номеру елементу в масиві
