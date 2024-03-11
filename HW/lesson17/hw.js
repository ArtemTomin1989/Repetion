let array_name = [
  "patrick",
  "bill",
  "tom",
  "santana",
  "izekil",
  "sew",
  "howard",
];

function long_name(name) {
  let result = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i].length > 5) {
      result.push(name[i]);
    }
  }
  return result;
}

console.log(long_name(array_name));
