// 1) Hoisting is a javascript default bahaviour of moving declaration to the top of the function, if defined inside a function or top of the global contaxt, if outside a function
// 2) let and const are not hoisted only var is hoisted
// 3) Only var declarations are hoisted not initialization

//Variable hoisting - inside function
// function firstMessage() {
//   console.log("Before declaration due to var hoisting, " + message);
//   var message = "I am hoisted";
//   console.log("After assignment, " + message);
// }
// firstMessage();

//Other example - in global contaxt
// console.log("Before declaration due to var hoisting, " + message);
// var message = "I am hoisted";
// console.log("After assignment, " + message);

//function hoisting
// showMessage();
// function showMessage() {
//   var message = "function hoisting";
//   console.log("After call function defination, " + message);
// }
