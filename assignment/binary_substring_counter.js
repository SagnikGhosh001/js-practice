const decimalValue = 65;
const subString = "00";

let binaryValue = 0;
let decimalValueForOperation = decimalValue;
let remainder = 0;
let binaryMultiplier = 1

while (decimalValueForOperation !== 0) {
  remainder = decimalValueForOperation % 2;
  binaryValue = binaryValue + remainder * binaryMultiplier;
  binaryMultiplier = binaryMultiplier * 10;
  decimalValueForOperation = decimalValueForOperation / 2;
  if(remainder){
    decimalValueForOperation = decimalValueForOperation - (remainder / 2);
  }
}
let binaryValueForOperation = binaryValue;


const lengthOfSubString = subString.length;
const divisor = (10 ** lengthOfSubString);
let matchedAnswer = 0;
let tempReminder = 0;

while (binaryValueForOperation !== 0) {
  remainder = binaryValueForOperation % divisor;
  if((remainder - subString) === 0){
    matchedAnswer++;
  }
  tempReminder = binaryValueForOperation % 10;
  binaryValueForOperation = binaryValueForOperation / 10;
  if(tempReminder) {
    binaryValueForOperation = binaryValueForOperation - (tempReminder / 10);
  }
}

 console.log('Number',decimalValue);
 console.log('Substring',subString);
 console.log('Binary',binaryValue);
 console.log('answear',matchedAnswer);
