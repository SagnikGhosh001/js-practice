const decimalNumber = 21;
const substring = "101"

let copyOfDecimalNumber = decimalNumber;
let binaryNumber = 0;
let copyOfBinaryNumber = 0;
let remainder = 0
let binaryMultiplier = 1

while (copyOfDecimalNumber !== 0) {
  remainder = copyOfDecimalNumber % 2;
  binaryNumber = binaryNumber + remainder * binaryMultiplier
  binaryMultiplier = binaryMultiplier * 10
  copyOfDecimalNumber = copyOfDecimalNumber / 2
  if(remainder){
    copyOfDecimalNumber = copyOfDecimalNumber - (remainder / 2)
  }
}
copyOfBinaryNumber = binaryNumber;

const countOfSubString = substring.length
let matchedAnswer = 0
let tempReminder = 0

while (copyOfBinaryNumber !== 0) {
  remainder = copyOfBinaryNumber % (10 ** countOfSubString) 
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
