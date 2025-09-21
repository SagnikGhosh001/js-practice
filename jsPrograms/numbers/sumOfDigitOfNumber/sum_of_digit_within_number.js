const input = 123;
let copyOfInput = input;
let sum = 0;

while (copyOfInput !== 0) {
  let reminder = 0;
  reminder = copyOfInput % 10;
  sum = sum + reminder
  copyOfInput = copyOfInput / 10;

  if(reminder) {
    copyOfInput = copyOfInput - (reminder / 10)
  } 
}
console.log(input,"=",sum);
