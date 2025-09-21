const input = 110;
let inputCopy = input
let reverseResult = 0

while (inputCopy != 0){
  let remainder = 0
  remainder = inputCopy % 10
  reverseResult = reverseResult * 10 + remainder
  inputCopy = (inputCopy - remainder) / 10
}

console.log(reverseResult);
