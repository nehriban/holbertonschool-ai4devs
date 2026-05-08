// Intended: Calculate the average of an array of numbers
// Bug Type: Runtime exception - off-by-one in loop

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
