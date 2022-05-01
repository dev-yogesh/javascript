// 86 - kth largest and smallest
// Way 1 - by sorting - T ==> O(N)

const kthSmallestLargest = (arr, k) => {
  arr.sort((a, b) => a - b);

  console.log(arr[k - 1]); // kth smallest
  console.log(arr[arr.length - k]); // kth largest
};

kthSmallestLargest([1, 26, -3, 23, 56, 8], 1);
