// 1) const declarations are block scoped
// 2) const declarations are not hoisted before program execution
// 3) const variables can not be re-declared and re-assigned

//1) const declarations are block scoped
// if (true) {
//   const message = "I am block scoped const declaration";
//   console.log(message);
// }

//console.log(message); --> const.js:10 Uncaught ReferenceError: message is not defined

//2) const variables can not be re-declared and re-assigned
// const message = "I am const variable, can not be re-declared and re-assigned";
// console.log("Before re-declaration, " + message);

// let message = "I am re-declared"; --> Identifier 'message' has already been declared
// console.log("After re-declaration, " + message); --> Identifier 'message' has already been declared

// message = "I am re-assigned"; --> const.js:21 Uncaught TypeError: Assignment to constant variable.
// console.log("After re-assignment, " + message); --> const.js:21 Uncaught TypeError: Assignment to constant variable.

//Other example
// const message = "I am global scoped const variable";
// console.log("Global scoped const, " + message);

// function firstMessage() {
//   const message = "I am function scoped const variable";
//   console.log("Inside firstMessage function, " + message);

//   if (true) {
//     console.log("Inside first if block, " + message);
//   }
//   console.log("After first if block, " + message);

//   if (true) {
//     const message = "I am block scoped const variable";
//     console.log("Inside second if block, " + message);
//   }
//   console.log("After second if block, " + message);
// }
// firstMessage();
// console.log("Global scoped const, " + message);

//3) const declarations are not hoisted before program execution
// console.log(message);
// const message = "const declarattions are not hoisted"; --> Uncaught ReferenceError: Cannot access 'message' before initialization
