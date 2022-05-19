"use strict";
// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function(string) {
//   // const symbolsArray = string.split('');
//   let message = string;
//   // console.log(message);
//   if(string.length > 40){

//     message = `${message.slice(0, 39)}...`
//   }
//   return message;
//   };

const formatString = function (string) {
  if (string.length > 40) {
    return `${string.slice(0, 39)}...`;
  }
  return string;
};

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка
