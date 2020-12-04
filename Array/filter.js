const ages = [16, 20, 29, 45, 13, 15, 18];

// const eligibleAge = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     eligibleAge.push(ages[i]);
//   }
// }

// console.log(eligibleAge);

// const eligibleAge = ages.filter(function (age) {
//   if (age >= 18) {
//     return true;
//   }
// });

// console.log(eligibleAge);

// const eligibleAge = ages.filter((age) => {
//   if (age >= 18) {
//     return true;
//   }
// });

// OR

const eligibleAge = ages.filter((age) => age >= 18);

console.log(eligibleAge);
