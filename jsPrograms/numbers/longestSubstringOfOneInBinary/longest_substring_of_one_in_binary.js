const decimalValue = 29;

let binaryValue = 0;
let decimalValueForOperation = decimalValue;
let binaryMultiplier = 1

while (decimalValueForOperation !== 0) {
  const remainder = decimalValueForOperation % 2;
  binaryValue = binaryValue + remainder * binaryMultiplier;
  binaryMultiplier = binaryMultiplier * 10;
  decimalValueForOperation = (decimalValueForOperation - remainder) / 2;
}

let binaryValueForOperation = binaryValue + "";
let lengthOfTheBinaryNumber = binaryValueForOperation.length;
let finalCountOfLongestOne = 0;
let currentCountOfLongestOne = 0;

for (let currentTerm = 0; currentTerm < lengthOfTheBinaryNumber; currentTerm++) {
  if (binaryValueForOperation[currentTerm] === "1") {
    currentCountOfLongestOne++;
  }

  if(binaryValueForOperation[currentTerm] === "0" || currentTerm === (lengthOfTheBinaryNumber - 1)) {
    finalCountOfLongestOne = currentCountOfLongestOne > finalCountOfLongestOne ? currentCountOfLongestOne : finalCountOfLongestOne;
    currentCountOfLongestOne = 0;
  }
  
}

console.log("decimal",decimalValue);
console.log("binary",binaryValueForOperation);
console.log("count of largest no",finalCountOfLongestOne);
