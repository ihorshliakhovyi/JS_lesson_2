"use strict";

// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   const newMessage = message.toLowerCase();
//   const wordsArray = newMessage.split(" ");
//   let messageBack = false;
//   for (let i = 0; i < wordsArray.length; i += 1) {
//     if (wordsArray[i] === "spam" || wordsArray[i] === "sale") {
//       messageBack = true;
//     }
//   }
//   return messageBack;
// };

const checkForSpam = function (message) {
    const newMessage = message.toLowerCase();
    let messageBack = false;
    // const spam = 'spam';
    // const sale = 'sale';
    if(newMessage.indexOf('spam') !== -1 || newMessage.indexOf('sale') !== -1){
        messageBack = true;
    }
    return messageBack;
  };




console.log(checkForSpam("Get best sale offers now!"));
// true

console.log(checkForSpam("JavaScript weekly newsletter"));
// false

console.log(checkForSpam('[SPAM] How to earn fast money?'));
 // true
