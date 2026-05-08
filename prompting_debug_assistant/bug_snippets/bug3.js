// Bug 3 – bug3.js
// Intended Behavior: Return the arithmetic average of an array of numbers.
// Issue Type: Runtime exception (off-by-one in loop).
// Notes: Loop uses <= instead of <. Reads undefined on last iteration making total NaN.

function calculateAverage(numbers) {
  let total = 0;
  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}

console.log(calculateAverage([10, 20, 30]));
console.log(calculateAverage([5, 15]));
console.log(calculateAverage([]));
console.log(calculateAverage([100]));
