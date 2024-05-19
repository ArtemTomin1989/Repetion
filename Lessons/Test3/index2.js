const { users, users2 } = require("./db");

let all_persons = [...users, ...users2];

function pass_length(all_users) {
  let result = 0;
  for (i = 0; i < all_users.length; i++) {
    result = all_users[i].age / all_users[i].name.length;
    result = Math.floor(result);
    let random = randomWord(result);
    console.log(random);
  }
  return result;
}
console.log(pass_length(all_persons));

function randomWord(len) {
  let result = "";
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
  return result;
}
