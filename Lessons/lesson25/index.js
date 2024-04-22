// створити два масиви рандомних чисел довжини num і створити ще один масив який буде вміщати в собі обидва масиви, але посортовані

function gen_arr(num) {
  let arr_num1 = [];
  let arr_num2 = [];
  for (let i = 0; i < num; i++) {
    let rand_num = Math.round(Math.random() * 100);
    let rand_num2 = Math.round(Math.random() * 100);
    arr_num1.push(rand_num);
    arr_num2.push(rand_num2);
  }
  console.log(arr_num1);
  console.log(arr_num2);

  let sort_arr = [...arr_num1, ...arr_num2];
  sort_arr.sort((a, b) => a - b);
  return sort_arr;
}
console.log(gen_arr(5));
