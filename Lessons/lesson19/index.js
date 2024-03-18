let array = [`bagato`, `stvoru`, `slova`, `toje`, `tam`, `napushu`];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i].toUpperCase());
// }

function print_array(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  result.sort();
  result.reverse();
  return result;
}
console.log(print_array(array));
