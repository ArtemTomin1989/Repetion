let array = [5, 7, 8, 34, 6778, 100];

let new_array = [...array];

console.log(new_array);

////////////////////////////////////////////////////////////////////////////////////////////////

let numbers2 = [
  53, 62, 102, 20, 12, 30, 123, 53, 62, 102, 20, 12, 30, 21, 15, 73,
];

function wer(num, n) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === n) count++;
  }
  let result = `число ${n} повторюється ${count} разів`;
  return result;
}

console.log(wer(numbers2, 12));
console.log(wer(numbers2, 15));
