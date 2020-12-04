// function callMe() {
//   console.log("I am a callback function");
// }

// function callBackcallMe(callback) {
//   callback();
// }

// callBackcallMe(callMe);

//Other way

function callBackcallMe(callback) {
  callback();
}

callBackcallMe(function callMe() {
  console.log("I am a call back function");
});
