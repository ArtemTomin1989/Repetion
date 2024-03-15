let names = [`james`, `Woren`, `barbara`];
let new_array = names;
for (let i = 0; i < names.length; i++) {
  console.log(names[i].toLowerCase()); // переводить регістр в маленький
  console.log(names[i].toUpperCase()); // переводить регістр в великий
}
console.log(names);
names.sort(); // sort працює лише зі стрінгом
console.log(names);
names.reverse(); // змінює порядок елементів в масиві від останнього до першого
console.log(names);

///////////////////////////////////////////////////////////////////////////////////////////////////////

let array = [`slova`, `wer`, `thx`];

for (let i = 0; i < array.length; i++) {
  if (i % 2 == 0) {
    console.log(array[i].toUpperCase());
  } else {
    console.log(array[i].toLowerCase());
  }
}
