// 1) A variable that is declared outside a function is a global variable
// 2) Value of global variable can be accessed (var, let, const) and modified (var, let) throughout the program

var message = "I am global scoped var variable";
// let message = "I am let vatiable"; --> Identifier 'message' has already been declared
// const message = "I am const variable"; --> Identifier 'message' has already been declared
console.log(message);

function firstMessage() {
  console.log("Inside firstMessage function, " + message);
}
firstMessage();

if (true) {
  console.log("Inside if block, " + message);
}
