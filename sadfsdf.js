// 1)
// const spaceString = (a) => {
//   var c = 0;
//   let b = a.split(" ");
//   for (let i = 0; i < b.length - 1; i++) {
//     c += 1;
//   }
//   console.log(c);
// };

// spaceString("sdflj sldfkj alfk alkfs alsk");
// 2)
// const spaceString = (a) => {
//   var c = 0;
//   let b = a.split(" ");
//   for (let i = 0; i < b.length; i++) {
//     if (b[i]) {
//       c += 1;
//     }
//   }
//   console.log(c);
// };

// spaceString(" sdflj sldfkj alfk alkfs alsk ");

// 3)
// const silce = (arr, a, b) => {
//   buffer = [];
//   for (let i = a; i < b; i++) {
//     buffer.push(arr[i]);
//   }
//   console.log(buffer);
// };
// silce([1, 2, 3, 4, 5, 6, 7], 2, 7);
// // 4)
// const culc = (start, end) => {
//   let buffer = [];
//  let sum = 0;
//   for (i = start; i <= end; i++) {
//     buffer.push(i);
//   }
// //   console.log(buffer);
//   for (j = 0; j < buffer.length; j++) {
//     sum += buffer[j];
//   }
//   console.log(sum);
// };
// culc(1, 5);
// 5)

const sortNumb = (a) => {
  arr = [123, 4124, 1, 223, , 423, 5, 12, 3, 324, 24, 42, 34, 23];
  if (a === "по возрастанию") {
    console.log(arr.sort((a, b) => a - b));
  } else {
    console.log(arr.sort((a, b) => b - a));
  }
};
sortNumb("по ");
