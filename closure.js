// 1) A closure is a function having access to the parent scope, but preserve its data from outside.

var globalMessage = "I am a global variable";

function outerFunction() {
  var outerMessage = "I am outer function variable";
  console.log("Inside outerFunction the outerMessage, " + outerMessage);
  function innerFunction() {
    var innerMessage = "I am inner function variable";
    console.log("Inside innerFunction the innerMessage, " + innerMessage);
    console.log("Inside innerFunction the outerMessage, " + outerMessage);
  }
  // console.log("Inside outerFunction the innerMessage, " + innerMessage); --> closure.js:13 Uncaught ReferenceError: innerMessage is not defined
  innerFunction();
}
outerFunction();
