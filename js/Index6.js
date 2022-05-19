"use strict";

let input;
const numbersArray = [];
let total = 0;

do {
  input = prompt("Input a number to count");

  numbersArray.push(input);
} while (input != null);

console.log(numbersArray);
for (let i = 0; i < numbersArray.length - 1; i += 1) {
  total = total + parseInt(numbersArray[i]);
}



alert(total);
