const decimalNumber = 79;
const substring = 11

let copyOfDecimalNumber = decimalNumber;
let binaryNumber = 0;
let copyOfBinaryNumber = 0;
let copyOfSubString = substring
let remainder = 0
let binaryMultiplier = 1

while (copyOfDecimalNumber != 0) {
  remainder = copyOfDecimalNumber % 2;
  copyOfBinaryNumber = copyOfBinaryNumber + remainder * binaryMultiplier
  binaryMultiplier = binaryMultiplier * 10
  copyOfDecimalNumber = copyOfDecimalNumber / 2
  if(remainder){
    copyOfDecimalNumber = copyOfDecimalNumber - (remainder / 2)
  }
}

binaryNumber = copyOfBinaryNumber;
let countOfSubString = 0

while (copyOfSubString > 0) {
  remainder = copyOfSubString % 10
  copyOfSubString = copyOfSubString / 10;
  if (remainder) {
    copyOfSubString = copyOfSubString - (remainder / 10)
  }
  countOfSubString++
}

let divider = 1
while (countOfSubString != 0) {
  divider = divider * 10;
  countOfSubString--;
}

let matchedAnswer = 0
let tempReminder = 0
while (copyOfBinaryNumber != 0) {
  remainder = copyOfBinaryNumber % divider 
  if((remainder - substring) === 0){
    matchedAnswer++;
  }
  tempReminder = copyOfBinaryNumber % 10
  copyOfBinaryNumber = copyOfBinaryNumber / 10;
  if(tempReminder) {
    copyOfBinaryNumber = copyOfBinaryNumber - (tempReminder / 10)
  }
}

 console.log('Number',decimalNumber);
 console.log('Substring',substring);
 console.log('Binary',binaryNumber);
 console.log('answear',matchedAnswer);
