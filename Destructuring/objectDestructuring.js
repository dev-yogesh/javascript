// const myObject = {
//   num1: 1,
//   num2: 2,
//   num3: 3,
//   num4: 4,
//   num5: 5,
//   num6: 6,
// };

// const { num1, num2, num3, num4, num5, num6 } = myObject;

// const { num3, num5 } = myObject;

// const myObject = {
//   num1: 1,
//   num2: 2,
// };

// const { num1, num2, num3 = 10 } = myObject;

// console.log(num3);

// as function parameter
// const myObject = {
//   num1: 1,
//   num2: 2,
// };
// function showFunction({ num1, num2 }) {
//   console.log(num1);
//   console.log(num2);
// }
// showFunction(myObject);

// on function return
// const myObject = {
//   num1: 1,
//   num2: 2,
// };
// function returnFunction(thisObject) {
//   return thisObject;
// }
// const { num1, num2 } = returnFunction(myObject);
// console.log(num1);
// console.log(num2);

// nested object
// const myObject = {
//   num1: 1,
//   num2: 2,
//   num3: 3,
//   other: {
//     ltr1: "A",
//     ltr2: "B",
//     ltr3: "C",
//   },
// };

// const {
//   num1,
//   other: { ltr3 },
// } = myObject;

// console.log(num1);
// console.log(ltr3);
