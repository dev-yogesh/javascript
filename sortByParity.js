// 93 - sort array by parity (first all even and then all odd)
// leetcode - https://leetcode.com/problems/sort-array-by-parity/

/*
Way 1 - by separating even and odds
==============================================================================
const sortByParity = (arr) => {
  const even = [];
  const odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  console.log(even.concat(odd));
};

sortByParity([13, 57, 4, -3, 9, 16, 12]);
==============================================================================
*/

// Notes
// 1 - .concat() does not change the existing arrays, returns a new array.

/*
Way 2 - by push and unshift
==============================================================================
const sortByParity = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.unshift(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  console.log(result);
};

sortByParity([13, 57, 4, -3, 9, 16, 12]);
==============================================================================
*/

// Notes
// 1 - unshift adds one or more to the beginning
// 2 - push adds one or more to the end

/*
Way 3 - 2 pointer approach (simple) - T ==> O(N), S ==> O(N)
==============================================================================
const sortByParity = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result[start] = arr[i];
      start++;
    } else {
      result[end] = arr[i];
      end--;
    }
  }

  console.log(result);
};

sortByParity([13, 57, 4, -3, 9, 16, 12]);
==============================================================================
*/

/*
Way 4 - 2 pointer approach (complex) - T ==> O(N), S ==> O(1)
==============================================================================
const swap = (arr, start, end) => {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
};

const sortByParity = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] % 2 === 0) start++;
    else if (arr[end] % 2 === 1) end--;
    else swap(arr, start++, end--);
  }

  console.log(arr);
};

sortByParity([13, 57, 4, -3, 9, 16, 12]);
==============================================================================
*/

// const sortByParity = (arr) => {
//   arr.sort((a) => (a % 2 === 0 ? -1 : 1));

//   console.log(arr);
// };

// sortByParity([13, 57, 4, -3, 9, 16, 12]);
