// 9 - swaping third variable
// 10 - swaping without third variable

/*
Way 1 - swaping third variable
==============================================================================
const swap = () => {
  let a = 10;
  let b = 20;

  let temp;

  temp = a;
  a = b;
  b = temp;

  console.log('swaped a, b ==>', a, b);
};

swap();
==============================================================================
*/

/*
Way 2 - swaping without third variable
==============================================================================
const swap = () => {
  let a = 10;
  let b = 20;

  a = a + b;
  b = a - b;
  a = a - b;

  // b = a + (a = b) - b;

  console.log('swaped a, b ==>', a, b);
};

swap();
==============================================================================
*/

/*
Way 3 - ES6 (destructuring assignment)
==============================================================================
const swap = () => {
  let a = 10;
  let b = 20;

  [b, a] = [a, b];

  console.log('swaped a, b ==>', a, b);
};

swap();
==============================================================================
*/

/*
Way 4 - bitwise XOR operator
==============================================================================
const swap = () => {
  let a = 10;
  let b = 20;

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log('swaped a, b ==>', a, b);
};

swap();
==============================================================================
*/
