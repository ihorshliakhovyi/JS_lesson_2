"use strict";

const logItems = function (array) {
  let message;
  for (let i = 0; i < array.length; i += 1) {
    message = `${i + 1} - ${array[i]}`;

    console.log(message);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
