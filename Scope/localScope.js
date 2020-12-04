// 1) A variable that is declared inside a function defination is a local variable
// 2) Value of local variable can be accessed (var, let, const) and modified (var, let) only inside that function

function firstMessage() {
  var message = "local / functional scoped var variable";
  // let message = "local / functional scoped var variable";
  // const message = "local / functional scoped var variable";
  console.log(message);
  if (true) {
    console.log(message);
  }
}
firstMessage();
// console.log(message); --> localScope.js:11 Uncaught ReferenceError: message is not defined
