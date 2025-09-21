const numberToCheck = 496;
let sum = 0;

for (let currentTerm = 1; currentTerm < numberToCheck; currentTerm++) {
  sum = (numberToCheck % currentTerm === 0) ? sum + currentTerm : sum;
}

const suffix = (sum === numberToCheck) ? "Perfect Number" : "Not a Perfect Number";

console.log(numberToCheck,suffix)
