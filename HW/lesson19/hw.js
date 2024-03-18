let arr_words = [`snake`, `camel`, `ball`, `jump`, `double`, `create`, `bump`];

function long_words_high_register(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 4) {
      result.push(arr[i].toUpperCase());
    }
  }
  return result;
}

console.log(long_words_high_register(arr_words));
