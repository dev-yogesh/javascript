// 19 - first pair whose some is target

/*
Way 1 - two loops, T ==> O(N^2)
==============================================================================
const pairSumZero = (arr, sumTarget) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sumTarget) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(pairSumZero([12, 6, 87, -8, 14, 8], -2));
==============================================================================
*/

/*
Way 2 - pointer approach (sorting of array required)
==============================================================================
const pairSumZero = (arr, sumTarget) => {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === sumTarget) {
      return [arr[left], arr[right]];
    } else if (sum > sumTarget) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(pairSumZero([12, 6, 87, -8, 14, 8], -2));
==============================================================================
*/
