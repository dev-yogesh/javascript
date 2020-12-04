let myPromice = new Promise((resole, reject) => {
  if (resole) {
    console.log("Success");
  } else {
    reject;
  }
});
myPromice.then(console.log("Hi")).catch(console.log("Ho"));
