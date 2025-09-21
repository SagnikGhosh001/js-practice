const numberToCheck = 6598;
let stringFormatOfNumber = numberToCheck + "";
let largestDigit = stringFormatOfNumber[0];
let currentTerm = 0;

if(currentTerm < stringFormatOfNumber.length) {
  largestDigit = (stringFormatOfNumber[currentTerm] > largestDigit) ? stringFormatOfNumber[currentTerm] : largestDigit
  currentTerm++;
}

if(currentTerm < stringFormatOfNumber.length) {
  largestDigit = (stringFormatOfNumber[currentTerm] > largestDigit) ? stringFormatOfNumber[currentTerm] : largestDigit
  currentTerm++;
}

if(currentTerm < stringFormatOfNumber.length) {
  largestDigit = (stringFormatOfNumber[currentTerm] > largestDigit) ? stringFormatOfNumber[currentTerm] : largestDigit
  currentTerm++;
}

if(currentTerm < stringFormatOfNumber.length) {
  largestDigit = (stringFormatOfNumber[currentTerm] > largestDigit) ? stringFormatOfNumber[currentTerm] : largestDigit
  currentTerm++;
}

console.log("Input",numberToCheck,"Max Digit",largestDigit);
