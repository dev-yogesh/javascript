// 1) let declarations are block scoped
// 2) let variables can not be re-declared but can be re-assigned
// 3) let declarations are not hoisted before program execution

//1) let declarations are block scoped
// if (true) {
//   let message = "I am block scoped let declaration";
//   console.log(message);
// }

// console.log(message); --> Uncaught ReferenceError: message is not defined

//2) let variables can not be re-declared but can be re-assigned
// let message =
//   "I am let variable, can not be re-declared but can be re-assigned";

// console.log("Before re-declaration, " + message);

// let message = "I am re-declared"; --> --> Uncaught SyntaxError: Identifier 'message' has already been declared
// console.log("After re-declaration, " + message); --> Uncaught SyntaxError: Identifier 'message' has already been declared

// message = "I am re-assigned";

// console.log("After re-assignment, " + message);

//Other example
// function firstMessage() {
//   let message =
//     "I am function scoped let variable, can not be re-declared but can be re-assigned";
//   console.log("Inside firstMessage Function, " + message);
//   if (true) {
//     message = "I am re-aasigned in first if block";
//     console.log("Inside first if block, " + message);
//   }
//   console.log("After first if block, " + message);
//   if (true) {
//     message = "I am re-assigned in second if block";
//     console.log("Inside second if block, " + message);
//   }
//   console.log("After second if block, " + message);
// }
// firstMessage();

//Other example
// let message =
//   "I am global scoped let variable, can not be re-declared but can be re-assigned";
// console.log("Before re-assignment, " + message);

// message = "I am re-assigned in global scope";
// console.log("After re-assignment, " + message);

// function firstMessage() {
//   console.log("Inside firstMessage function before re-assignment, " + message);
//   message = "I am re-assigned in functional scope";
//   console.log("Inside firstMessage function after re-assignment, " + message);
// }
// firstMessage();

// if (true) {
//   console.log("Inside if block before re-assignment, " + message);
//   message = "I am re-assigned in block scope";
//   console.log("Inside if block after re-assignment, " + message);
// }

// console.log("Inside global scope, " + message);

//3) let declarations are not hoisted before program execution
// console.log(message);
// let message = "let declarattions are not hoisted"; --> Uncaught ReferenceError: Cannot access 'message' before initialization
