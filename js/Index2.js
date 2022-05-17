"use strict";

const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsArray = message.split(" ");
  const engravingPrice = wordsArray.length * pricePerWord;
  return engravingPrice;
};

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// );


console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);