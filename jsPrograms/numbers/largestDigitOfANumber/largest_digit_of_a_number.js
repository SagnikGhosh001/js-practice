const numberToCheck = 342;
let stringFormatOfNumber = numberToCheck + "";
let largestDigit = stringFormatOfNumber[0];

for (let currentTerm = 0; currentTerm < stringFormatOfNumber.length; currentTerm++) {
  
  largestDigit = (stringFormatOfNumber[currentTerm] > largestDigit) ? stringFormatOfNumber[currentTerm] : largestDigit
}


console.log("Input",numberToCheck,"Max Digit",largestDigit);
