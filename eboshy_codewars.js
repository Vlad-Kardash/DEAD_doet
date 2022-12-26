// 1)
// const Quarter = (month) => {
//   if (month <= 3 && month >= 1) {
//     console.log("eto 1 qvartal");
//   } else if (month <= 6 && month > 3) {
//     console.log("eto 2 qvartal");
//   } else if (month <= 9 && month > 7) {
//     console.log("eto 3 qvartal");
//   } else if (month <= 12 && month > 9) {
//     console.log("eto 4 qvartal");
//   } else {
//     console.log("takogo month net");
//   }
// };
// Quarter(13);
// 2)
// const sum = (numb) => {
//   let buffer = [];
//   for (i = 0; i <= numb; i++) {
//     buffer.push(i);
//   }
//   console.log(buffer.reduce((prev, cur) => prev + cur));
// };
// sum(2);
// 3)
// const square = (ar) => {
//   return Math.pow(ar, 2);
// };
// console.log(square(3));
// 4)
// function saleHotdogs(n) {
//   return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
// }
// console.log(saleHotdogs(3));
// 5)
// function removeExclamationMarks(s) {
//   return s.split("!").join("");
// }
// console.log(removeExclamationMarks("asdasd! asdfd asd"));
// 6)
// p1 = [4, 6];
// p2 = [12, 4];
// p3 = [10, 10];

// function barTriang(p1, p2, p3) {
//   let x0 = Math.round(((p1[0] + p2[0] + p3[0]) / 3) * 10000) / 10000;

//   let y0 = Math.round(((p1[1] + p2[1] + p3[1]) / 3) * 10000) / 10000;
//   return [x0, y0];
// }
// console.log(barTriang(p1, p2, p3));
// 7)
// arr = [5, 4, 4];
// function isPythagoreanTriple(integers) {
//   if (
//     integers[0] ** 2 + integers[1] ** 2 == integers[2] ** 2 ||
//     integers[1] ** 2 + integers[2] ** 2 == integers[0] ** 2 ||
//     integers[0] ** 2 + integers[2] ** 2 == integers[1] ** 2
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPythagoreanTriple(arr));
// 8)
// arr = [4, 6, 2, 1, 9, 63, -134, 566];
// var min = function (list) {
//   buffer = [0];
//   for (i = 0; i < list.length; i++) {
//     if (buffer[0] > list[i]) {
//       buffer.push(list[i]);
//     }
//   }
//   return buffer[buffer.length - 1];
// };
// console.log(min(arr));

// var min = function (list) {
//   return Math.min(...list);
// };

// var max = function (list) {
//   return Math.max(...list);
// };

// var min = function (list) {
//   list.sort((a, b) => a - b);
//   return list[0];
// };

// var max = function (list) {
//   list.sort((a, b) => b - a);
//   return list[0];
// };
// function whatDayIsToday() {
//   // getDay() is a method of Date() - we will learn this later
//   var day = new Date().getDay(),
//     x;
//   switch (day) {
//     case 0:
//       x = "Today it's Sunday";
//       break;
//     case 1:
//       x = "Today it's Monday";
//       break;
//     case 2:
//       x = "Today it's Tuesday";
//       break;
//     case 3:
//       x = "Today it's Wednesday";
//       break;
//     case 4:
//       x = "Today it's Thursday";
//       break;
//     case 5:
//       x = "Today it's Friday";
//       break;
//     case 6:
//       x = "Today it's Saturday";
//       break;
//   }
//   return x;
// }
// console.log(whatDayIsToday());
// function howManydays(month){
//     var days="";
//     switch (month){
//     /*this is the months which has 31 days*/
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     days=31
//     break;
//     /*this is the months which has 30 days*/
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     days=30
//     break;
//     /*this is the months which has 28 days  */
//     case 2:
//     days=28;
//     break;
//     }
//     return days;
//   }
