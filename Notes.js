// Question 1 - Does .sort function change original array?
// https://stackoverflow.com/questions/24074968/does-sort-function-change-original-array

// 1 - sort changes the array
// Example

const arr = [1, 56, -4, 89, 5];
const sortedArr = arr.sort((a, b) => a - b);

console.log('original', arr);
console.log('sorted', sortedArr);

// Fix
// .slice returns returns new array. selects from start, up to a (not inclusive) end. Default is from 0 till end.
const arrNew = [1, 56, -4, 89, 5];
const sortedArrNew = arrNew.slice().sort((a, b) => a - b);
// const sortedArrNew = [...arrNew].sort((a, b) => a - b); // ES6

console.log('original', arrNew);
console.log('sorted', sortedArrNew);

// 9, 10, 86, 93
