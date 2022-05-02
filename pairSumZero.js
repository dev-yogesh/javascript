// 19 - first pair whose some is zero

/*
Way 1 - two loops, T ==> O(N^2)
==============================================================================
const pairSumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(pairSumZero([12, 6, 87, -8, 14, 8]));
==============================================================================
*/

/*
Way 2 - pointer approach (sorting of array required)
==============================================================================
const pairSumZero = (arr) => {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(pairSumZero([12, 6, 87, -8, 14, 8]));
==============================================================================
*/
