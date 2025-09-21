const input = 11;
let copyOfInput = input;
let countOfDigit = 0;
let remainder = 0

while (copyOfInput !== 0) {
  remainder = copyOfInput % 10;
  copyOfInput = copyOfInput / 10;

  if(remainder) {
    copyOfInput = copyOfInput - (remainder/10)
  }
  
  countOfDigit++;
}
console.log(countOfDigit);
