let arrPn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function clpn(arrPn) {
  for (let i = 0; i < arrPn.length; i++) {
    if (arrPn[i] % 2 == 0) {
      console.log(arrPn[i]);
    }
  }
}
console.log(clpn(arrPn));
