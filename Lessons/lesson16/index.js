let numbArr = [300, 5, -3, 5, 7, 0.7, 12];
console.log(numbArr[4]);

for (let i = numbArr.length - 1; i >= 0; i--) {
  console.log(numbArr[i]);
}

function sum(numbArr) {
  let result = 0;
  for (let i = 0; i < numbArr.length; i++) {
    result += numbArr[i];
  }
  return result;
}
console.log(sum(numbArr));

// Умова для функції sum:

// Приймає масив чисел numbers в якості параметру.
// Ініціалізує змінну result зі значенням 0 для зберігання суми чисел.
// За допомогою циклу for перебирає кожен елемент масиву numbers.
// Додає кожне число масиву до змінної result.
// Друкує поточну суму після кожного додавання.
// Після завершення циклу повертає змінну result, яка містить суму всіх чисел масиву numbers.