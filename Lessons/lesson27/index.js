let arr_num = [45, 657, 212, -76, 1001, 11];

arr_num.splice(3, 1); // метод, видаляє елемент ("3" це позиція від якої починаєється видалення, "1" це кількість елементів, які ми видялємо)
console.log(arr_num);

////////////////////////////////////////////////////////////////////////////////////////////

const new_obj = { name: "john", age: 10 };

console.log(new_obj.age);
console.log(new_obj.name);

new_obj.age = 20;

console.log(new_obj);

new_obj.country = "Ukraine";
console.log(new_obj);

////////////////////////////////////////////////////////////////////////////////////////////////

const users = [
  { name: "john", age: 10 },
  { name: "sarah", age: 50 },
];

let new_user = { name: "bill", age: 46 };
users.push(new_user);

console.log(users);
