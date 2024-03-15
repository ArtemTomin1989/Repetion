let array_name = [
  "patrick",
  "bill",
  "tom",
  "santana",
  "izekil",
  "sew",
  "howard",
];

function long_name(name_arr) {
  // console.log(name_arr);
  let result = [];
  for (let i = 0; i < name_arr.length; i++) {
    // console.log(name_arr[i]);
    if (name_arr[i].length > 5) {
      result.push(name_arr[i]);
    }
  }
  return result;
}

console.log(long_name(array_name));
