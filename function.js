// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// 1)

// const arraySum = (array) => {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(sum);
// };
// arraySum(arr);
// 2)

// const arraySum = (arrr) => {
//   let a = arrr.length;
//   arrr.splice(0, a / 2);
//   console.log(arrr);
// };
// arraySum(arr);
// 3)
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
// const arrC = (arr, arr1, arr2, arr3) => {
//   let arr4 = arr.concat(arr1, arr2, arr3);
//   console.log(arr4);
// };
// arrC([1, 2], arr1, arr2, arr3);
// 4)

// const array = (arr) => {
//   return arr.map((el) => {
//     return "element = " + el;
//   });
// };
// console.log(array(arr));
// 5)
// arr.forEach((el, index) => {
//   console.log(`element : ${el} s indexom : ${index}`);
// });
// 6)
// let str = "тест";

// console.log(str.split(""));
// 7)
// let arrava = (arr) => {
//   console.log(arr.join(" & "));
// };
// arrava(arr);
// 1*)

// let feb = (a) => {
//   let buffer = [];
//   for (i = 0; i < a; i++) {
//     if (i == 0 || i == 1) {
//       buffer.push(i);
//     } else {
//       let element = buffer[i - 1] + buffer[i - 2];
//       buffer.push(element);
//     }
//   }
//   console.log(buffer);
// };
// feb(30);
// 2*)
// let func = (count, degree) => {
//   let number = count ** degree;
//   let array = ("" + number).split("").map(Number);
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(sum);
// };
// func(2, 4);

// 2 часть
// 1)

// const getReversedNum = (num) => {
//   let result = 0;
//   while (num) {
//     result = result * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return result;
// };
// console.log(getReversedNum(4563123));

// const alfa = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(alfa("12312"));
// 2)
// function palindrom(str) {
//   str = str.toLowerCase().replace(/\s/g, "");
//   if (str === str.split("").reverse().join("")) {
//     console.log("zaebis");
//   } else {
//     console.log("ne zaebis");
//   }
// }
// palindrom("racecar racecar");
// 3)
// const alfa = (str) => {
//   return str.split("").sort().join("");
// };
// console.log(alfa("zfdgdz"));
// 4)

// function findLongestWord(str) {
//   var strSplit = str.split(" ");
//   var longestWord = 0;
//   for (var i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//   }

//   console.log(longestWord);
// }

// findLongestWord("adsasd advssood ads asdda");
// 5)
// const func = (str) => {
//   let count = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count += 1;
//     }
//   }
//   console.log(count);
// };
// func("zalupeeva");
// 6)
// const isPrime = (num) => {
//   for (i = 2; i <= num; i++) {
//     if (num % i == 0) {
//       return false;
//     } else if (num % i == 1) {
//       return console.log("zaebis");
//     }
//   }
// };
// isPrime(80);
// 7)

// const func = (a) => {
//   var a1 = [23, 10, 3, 5, 634, 1, 30];
//   let a2 = [];
//   for (i = 0; i < a1.length; i++) {
//     if (a1[i] > a) {
//       a2.push(a1[i]);
//     }
//   }
//   console.log(a2);
// };
// func(5);
// 8)
// const fun = (a) => {
//   let b = a.split("");
//   let c = [];
//     for (i = 0; i < b.lenght; i++) {
//       if(){}
//   }
//   console.log(b);
// };
// fun("sdkfdwksdf");
