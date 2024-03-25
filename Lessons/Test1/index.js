// 1 завдання
// Напишіть програму для обчислення факторіалу числа. Програма повинна враховувати такі умови:
// - Якщо введене число є від'ємним або дорівнює нулю, результат обчислення буде 1.
// - Факторіал невід'ємного цілого числа n - це добуток всіх невід'ємних цілих чисел менших або рівних n.
// -Також потрібно для кожного виводу зробити гарне пояснення, що саме обчислили і що вийшло.

function factorial(num) {
  let result = 1;
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  }
  return result;
}

console.log(factorial(-5));

////////////////////////////////////////////////////////////////////////////

let secret = 100;

for (i = 0; i <= secret; i++) {
  console.log(i);
  let pet = secret - i;
  console.log(`${i} + ${pet} = ${secret}`);
}