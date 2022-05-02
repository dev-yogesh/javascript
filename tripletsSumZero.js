// Way 1 - nested loops, T ==> O(N^3)
// const tripletsSumZero = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === 0) {
//           return [arr[i], arr[j], arr[k]];
//         }
//       }
//     }
//   }
// };

// console.log(tripletsSumZero([13, 9, -6, 4, 6, 0]));

// Way 2 - pointer approach
const tripletsSumZero = (arr) => {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        return [arr[i], arr[left], arr[right]];
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
};

console.log(tripletsSumZero([13, 9, -6, 4, 6, 0]));
