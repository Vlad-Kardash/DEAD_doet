// "use strict";
// let arr = ["mark", "vitaliu", "aleksandr", "vlad", "alex", "dasha"];
// const fun = (arr) => {
//   console.log(arr[Math.floor(Math.random() * (arr.length - 0)) + 0]);
// };
// fun(arr);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
