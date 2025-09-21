const numberToCheck = 76455;
const stringFormatOfNumber = numberToCheck + "";

let hasDuplicateDigit = false;

for(let currentTerm = 0; currentTerm < stringFormatOfNumber.length - 1; currentTerm++) {
  let nextTerm = currentTerm + 1;

  while (nextTerm < stringFormatOfNumber.length && !hasDuplicateDigit) {
    hasDuplicateDigit = (stringFormatOfNumber[currentTerm] === stringFormatOfNumber[nextTerm]);
    nextTerm++;
  }
}

const suffix = hasDuplicateDigit ? "All Digit are not Unique" : "All digits are Unique";

console.log("Input",numberToCheck,"Output",suffix);
