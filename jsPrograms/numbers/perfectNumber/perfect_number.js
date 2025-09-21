const numberToCheck = 28;
let sum = 0;
const isPerfect = true
const suffix = isPerfect ? "Perfect Number" : "Not a Perfect Number";

for (let currentTerm = 1; currentTerm < numberToCheck; currentTerm++) {
  sum = (numberToCheck % currentTerm === 0) ? sum + currentTerm : sum;
}


console.log(sum);

console.log(numberToCheck,suffix)
