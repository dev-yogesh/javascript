// 1) function parameters / arguments are local variables

function firstMessage(fname, lname) {
  console.log("Full Name, " + fname + " " + lname);
}
firstMessage("Yogesh", "Gupta");

// console.log(fname); --> Uncaught ReferenceError: fname is not defined
// console.log(lname); --> Uncaught ReferenceError: fname is not defined
