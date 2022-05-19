"use strict";

const findLongestWord = function(string) {
    const wordsArray = string.split(' ');
    let longestWord = wordsArray[0];
    for (let i = 1; i < wordsArray.length; i += 1){
      if (wordsArray[i].length > longestWord.length){
        longestWord = wordsArray[i];
      }
    }
  // console.log(wordsArray);
  return longestWord;




  };

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));