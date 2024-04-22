let a = Math.abs(-2); //модуль
console.log(a);

let b = Math.ceil(0.2); // завжди округляє до наступного цілого в більшу сторону
console.log(b);

let c = Math.floor(0.2); // завжди округляє до наступного цілого в меншу сторону
console.log(c);

let d = Math.round(0.6); // істинне заокргулення числа
console.log(d);

let e = Math.max(1, 5, 89, -864, 456); // визначає найбільше число
console.log(e);

let f = Math.min(1, 5, 89, -864, 456); // визначає найменше число
console.log(f);

let g = Math.pow(2, 3); // піднесеня першого до степеня другого числа (2**3)
console.log(g);

let h = Math.sqrt(25); // добуває корінь числа
console.log(h);

let i = Math.random() * 100; // виводить рандомне десяткове число
console.log(Math.round());

let j = Math.trunc(0.7); // відкидає все, що після коми
console.log(j);

//////////////////////////////////////////////////////////////////////////////////

function num_rand(array) {
  let new_arr = [...array];
  new_arr.push(Math.round(Math.random() * 100));
  return new_arr;
}

let num_arr = [5, 890];
console.log(num_rand(num_arr));

//////////////////////////////////////////////////////////////////////////////////////

function randowWord(len) {
    let result = "";
    const character =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < len; i++) {
      result += character.charAt(Math.floor(Math.random() * character.length));
    }
    return result;
  }
  
  console.log(randowWord(8));
