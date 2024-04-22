function arr_num(num) {
  let arr_rand = [];
  for (let i = 0; i < num; i++) {
    let rand_num = Math.round(Math.random() * 100); //створення рандомної змінної
    arr_rand.push(rand_num);
  }

  let sort_rand = [...arr_rand]; // копіювання масиву, щоб не змінювати основний масив
  sort_rand.sort((a, b) => a - b); // істинне сортування чисел в масиві
  console.log(sort_rand);
  console.log(arr_rand)

  let result = 0;
  for (let i = 0; i < arr_rand.length; i++) {
    if (arr_rand[i] == sort_rand[i]) {
      result ++;
    }
  }
  return result;
}

let arr_lngt = 5;

console.log(arr_num(arr_lngt));
