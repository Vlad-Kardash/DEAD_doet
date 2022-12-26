// let tovar = {
//   price: "300",
//   srokGodnosti: "23.10.2023",
//   srokIzgotovleni9: "23.10.2022",
//   name: "potato",
//   getInfo() {
//     return `перед нами ${this.name} срок изготовления ${this.srokIzgotovleni9} сроком годности ${this.srokGodnosti} ценой в ${this.price} долларс`;
//   },
// };
// console.log(tovar.getInfo());
// let coordinats = [
//   { x: 12, y: 34 },
//   { x: 1212, y: 676 },
//   { x: 635, y: 7896 },
//   { x: 3258, y: 34 },
//   { x: 12, y: 6666 },
// ];

// let calcSumOfCoordinats = (coordinats) => {
//   let buffer = [];
//   for (let i = 0; i < coordinats.length; i++) {
//     buffer.push(coordinats[i].x * coordinats[i].y);
//   }
//   return buffer.reduce((prev, cur) => prev + cur);
// };
// console.log(calcSumOfCoordinats(coordinats));

// / let tovar = {
//       price: "300",
//       srokGodnosti: "23.10.2023",
//       srokIzgotovleni9: "23.10.2022",
//       name: "potato",
//       getInfo() {
//         return `перед нами ${this.name} срок изготовления ${this.srokIzgotovleni9} сроком годности ${this.srokGodnosti} ценой в ${this.price} долларс`;
//       },
// const func = (...args) => {
//   return {
//     ...args,
//     // name: name,
//     // lastName: lastname,
//     // age: age,
//     // isMaried: isMaried,
//   };
// };
// console.log(func("bille", "harington", 37, false));

// 1) Напишите функцию, которая проверяет, является ли элемент
// именно простым объектом, а не массивом, null и т.п.

// const objectСheck = (shoto) => {
//   //   console.log(shoto instanceof Object && !Array.isArray(shoto));

//   console.log(
//     typeof shoto == "object" && !Array.isArray(shoto) && shoto == null
//   );
// };
// objectСheck([]);
// 2)Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]
// const data = { a: 1, b: 2 };
// const makePairs = (object) => {
//   var buffer = [];
//   for (var prop in object) {
//     buffer.push([object[prop], prop]);
//   }
//   console.log(buffer);
//   //   let entries = Object.entries(object);
//   //   console.log(entries);
// };
// makePairs(data);
// 3)Напишите функцию, которая возвращает новый объект без указанных значений.
// const data = { a: 1, b: 2, c: 3 };
// const without = (object, ...args) => {
//   let n = {};
//   for (var prop in object) {
//     if ([...args][0] !== prop && [...args][1] !== prop) {
//       n[prop] = object[prop];
//     }
//   }

//   console.log(n);
// };
// without(data, "a", "b");
// // 4) Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
// const data = { a: "", b: undefined };
// const data2 = { a: undefined };

// const isEmpty = (object) => {
//   const objValues = Object.values(object);

//   if (objValues.filter((el) => !!el).length > 0) {
//     return false;
//   } else {
//     return true;
//   }
// };

// console.log(isEmpty(data));
// // 5)Напишите функцию, которая поверхностно сравнивает два объекта.
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// const isEqual = (firstObject, secondObject) => {
//   console.log(JSON.stringify(firstObject) == JSON.stringify(secondObject));
//   // for (var key in firstObject) {

//   //     if (firstObject[key] !== secondObject[key]) {
//   //       return false;
//   //     }
//   //   }
//   //   return true;
// };
// isEqual(data, data2);
// 6)
// Напишите функцию, которая вызывает метод массива на заданный путь объекта.
const data = { a: { b: [1, 2, 3] } };
const invoke = (object, path, func, args) => {};
console.log(invoke(data, "a.b", "splice", [1, 2]));
