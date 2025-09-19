const input = 11;
let copyOfInput = input;
let countOfDigit = 0;
let reminder = 0

while (copyOfInput !== 0) {
  reminder = copyOfInput % 10;
  copyOfInput = copyOfInput / 10;

  if(reminder) {
    copyOfInput = copyOfInput - (reminder/10)
  }
  
  countOfDigit++;
}
console.log(countOfDigit);
