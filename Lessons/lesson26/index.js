let arr = ["bam", "Jam", "Kris", "michael"];
arr.sort((a, b) => a.localeCompare(b)); // істинне сортування стрингу, без переводу в єдиний регістр.
console.log(arr);

// Створити функцію яка приймає масив чисел
// І потрібно рандомно посортувати ці числа в масиві( можна використовувати ліби масивів)
function rand_arr(arr) {
  let result = [];
  let arr_length = arr.length;
  for (let i = 0; i < arr_length; i++) {
    let index = Math.floor(Math.random() * arr_length);
    result.push(arr[index]);
    arr.splice(index, 1);
  }
  return result;
}

num = [5, 87, 1234, -56, 2];

console.log(rand_arr(num));
