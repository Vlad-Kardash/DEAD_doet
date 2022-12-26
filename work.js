// let a = 666;
// console.log(typeof a);
// let b = 1234n;
// console.log(typeof b);
// let c = "ebanoe.IT";
// console.log(typeof c);
// let d = true;
// console.log(typeof d);
// let e = null;
// console.log(typeof e);
// let f = undefined;
// console.log(typeof f);
// let g = {};
// console.log(typeof g);

// let work_a = 2 + 2;
// console.log(work_a);
// let work_b = 5 * 5 + 5;
// console.log(work_b);
// let work_c = 1000 / 20;
// console.log(work_c);
// let work_e = 100 - 65.3456765;
// console.log(work_e);

// console.log("JavaScript это сложно, но можно!");

// let myText = "Слишком мало домашки!!! Надо больше!!!!";
// console.log(myText);

// let a = 3;
// ++a;
// --a;
// console.log(a);

// let b = true;
// console.log(b==false);

// leson 9

// 1

// function culcOneWork(a) {
//     return(a**2)
// }
// console.log(culcOneWork(5))

// 2

// function culcSum(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     return sum;
//     }

// console.log(culcSum(1,3));

//  3

// function culcSum(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 3 == 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(culcSum(1,3));

// 4

// function showMessage(from, text) {
//     let a = from + ' ' + text
//     console.log(a)
// }
// showMessage('hello', 'world');

// 5

// function logc(a) {
//   if (typeof a == "boolean") {
//     console.log("this is bool");
//   } else if (typeof a == "number") {
//     console.log("this is number");
//   } else {
//     console.log("this is another type");
//   }
// }
// logc(null);

// 6

// const variableReturn = (a) => {
//   let d = (((a * 3) / 5) * 1000) / 0.123;
//   return d * 100;
// };
// console.log(variableReturn(5));

// 1*
// function culc(a) {
//       return a**(1/2)
// }
//  console.log(culc(2));
// 2*
// function culc(a) {
//     return a**45
// }
// console.log(culc(2));
// 3*
// function culc(a) {
//     return Math.cos(a)
// }
// console.log(culc(30));
// 4*
// function culc(a) {
//      return Math.sin(a)
//     }
//     console.log(culc(30));
// 5*
// function culc(a) {
//     return 1 / Math.tan(a)
//        }
//     console.log(culc(30));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
arr.unshift(124124);
console.log(arr);
