const input = 112;
let copyOfInput = input;
let countOfDigit = 0;
let remainder = 0

while (copyOfInput !== 0) {
  remainder = copyOfInput % 10;
  copyOfInput = (copyOfInput - remainder) / 10;  
  countOfDigit++;
}
console.log(countOfDigit);
