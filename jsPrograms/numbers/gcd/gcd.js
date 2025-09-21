const firstNumber = 4;
const secondNumber = 6;

let gcd = 1;

let divisor = 1;
if(firstNumber % divisor === 0 && secondNumber % divisor === 0) {
  gcd = divisor > gcd ? divisor : gcd;
}
divisor++;

if(firstNumber % divisor === 0 && secondNumber % divisor === 0) {
  gcd = divisor > gcd ? divisor : gcd;
}
divisor++;

if(firstNumber % divisor === 0 && secondNumber % divisor === 0) {
  gcd = divisor > gcd ? divisor : gcd;
}
divisor++;

if(firstNumber % divisor === 0 && secondNumber % divisor === 0) {
  gcd = divisor > gcd ? divisor : gcd;
}
divisor++;

console.log("gcd of",firstNumber,"and",secondNumber,"is",gcd);
