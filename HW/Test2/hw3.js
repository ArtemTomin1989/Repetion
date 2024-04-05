// function enhanceWords(array) {
//   result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 4) {
//       array[i] = array[i].toUpperCase();
//     }
//     if (i % 2 == 0) {
//       array[i] += "*";
//     }
//   }
//   result.push(array);
//   return result;
// }

// let words = ["table", "chair", "Lamp", "desk", "bookshelf", "Couch"];
// console.log(enhanceWords(words));
// console.log(enhanceWords(["cat", "dog", "elephant", "Lion", "tiger"]))

// console.log(enhanceWords(["table", "chair", "Lamp", "desk", "bookshelf", "Couch"]));
// // ['TABLE*', 'CHAIR', 'Lamp*', 'desk', 'BOOKSHELF*', 'COUCH']
// console.log(enhanceWords(["cat", "dog", "elephant", "Lion", "tiger"]));
// // ['cat*', 'dog', 'ELEPHANT*', 'Lion', 'TIGER*']

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function enhanceWords(words) {
  const enhancedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 4) {
      word = word.toUpperCase();
    }

    if (i % 2 === 0) {
      word += "*";
    }

    enhancedWords.push(word);
  }

  return enhancedWords;
}

words = ["table", "chair", "Lamp", "desk", "bookshelf", "Couch"];
console.log(
  enhanceWords(["table", "chair", "Lamp", "desk", "bookshelf", "Couch"])
); // ['TABLE*', 'CHAIR', 'Lamp*', 'desk', 'BOOKSHELF*', 'COUCH']
