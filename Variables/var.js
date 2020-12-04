// 1) var declarations are global scoped and function scoped
// 2) var declarations are not block scoped
// 3) scope of the variables declared without var keyword becomes global scoped
// 4) var variables can be re-declared and re-assigned
// 5) var declarations are hoisted before program execution

//1) var declarations are global scoped and function scoped

//*global scoped
// var message =
//   "I am global scoped var declaration can be accessed from anywhere";

// console.log("Inside Global, " + message);

// function showFirst() {
//   console.log("Inside showFirst Function, " + message);
// }
// showFirst();

// function showSecond() {
//   console.log("Inside showSecond Function, " + message);
// }
// showSecond();

// if (true) {
//   console.log("Inside if Block, " + message);
// }

//*function scoped
// function firstMessage() {
//   var message =
//     "I am function scoped var declaration can be accessed only from this function";
//   console.log("Inside firstMessage Function, " + message);
// }
// firstMessage();

//console.log("Inside Global, " + message); --> var.js:32 Uncaught ReferenceError: message is not defined

// function secondMessage() {
//   var message =
//     "I am function scoped var declaration can be accessed only from this function";
//   console.log("Inside secondMessage Function, " + message);
// }
// secondMessage();

//2) var declarations are not block scoped

// if (true) {
//   var message = "I am block scoped var declaration";
//   console.log("Inside If Block, " + message);
// }

// console.log("Inside Global, " + message);

//3) scope of the variables declared without var keyword becomes global scoped

// function firstMessage() {
//   message = "I am a variable without var declaration resulting global variable";
//   console.log("Inside firstMessage Function, " + message);
// }
// firstMessage();

// console.log("Inside Global, " + message);

// function secondMessage() {
//   console.log("Inside secondMessage Function, " + message);
// }
// secondMessage();

// if (true) {
//   console.log("Inside If Block, " + message);
// }

//4) var variables can be re-declared and re-assigned

// var message = "I am a var variable, can be re-declared and re-assigned";

// console.log("Inside Global, " + message);

// var message = "I am re-declared";

// console.log("Inside Global, " + message);

// message = "I am re-assigned";

// console.log("Inside Global, " + message);

// function firstMessage() {
//   message =
//     "I am re-assignd in firstMessage Function but should not be re-declared otherwise i will become functon scoped";
//   console.log("Inside firstMessage, " + message);
// }
// firstMessage();

// console.log("Inside Global, " + message);

// if (true) {
//   var message = "I am re-decared and re-assigned in if block";
//   console.log("Inside If Block, " + message);
// }

// console.log("Inside Global, " + message);

//5) var declarations are hoisted before program execution
// var message = "var declaration with assignment";
// console.log(message);

// Hoisting of above
// var message;
// message = "var declaration with assignment";
// console.log(message);

// console.log("Before declaration and assignment, " + message);
// var message = "I am declared and assigned before consoling";
// console.log("After declaration and assignment, " + message);

// Hoisting of above
// var message;
// console.log("Before, " + message);
// message = "I am declared and assigned before consoling";
// console.log("After, " + message);
