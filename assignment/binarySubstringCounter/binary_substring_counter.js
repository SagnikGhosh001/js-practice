const decimalValue = 19;
const subString = "1";

let binaryValue = 0;
let decimalValueForOperation = decimalValue;
let remainder = 0;
let binaryMultiplier = 1

while (decimalValueForOperation !== 0) {
  remainder = decimalValueForOperation % 2;
  binaryValue = binaryValue + remainder * binaryMultiplier;
  binaryMultiplier = binaryMultiplier * 10;
  decimalValueForOperation = remainder ? ((decimalValueForOperation - 1) / 2) : (decimalValueForOperation / 2);
}
let binaryValueForOperation = binaryValue;


const lengthOfSubString = subString.length;
const divisor = (10 ** lengthOfSubString);
let matchedAnswer = 0;

while (binaryValueForOperation !== 0) {
  let tempReminder = 0;
  remainder = binaryValueForOperation % divisor;
  matchedAnswer = ((remainder - subString) === 0) ? matchedAnswer + 1 : matchedAnswer;
  tempReminder = binaryValueForOperation % 10;
  binaryValueForOperation = tempReminder ? ((binaryValueForOperation - 1) / 10) : (binaryValueForOperation / 10);
}

 console.log('Number',decimalValue);
 console.log('Substring',subString);
 console.log('Binary',binaryValue);
 console.log('answear',matchedAnswer);
