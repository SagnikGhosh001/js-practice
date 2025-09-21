const input = 123;
let copyOfInput = input;
let sum = 0;

while (copyOfInput !== 0) {
  let remainder = 0;
  remainder = copyOfInput % 10;
  sum = sum + remainder
  copyOfInput = (copyOfInput - remainder)  / 10;
}
console.log(input,"=",sum);
