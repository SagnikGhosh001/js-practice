const firstNumber = 18;
const secondNumber = 24;

let gcd = 1;

for (let divisor = 2; divisor <= firstNumber || divisor <= secondNumber; divisor++) {
  if(firstNumber % divisor === 0 && secondNumber % divisor === 0) {
    gcd = divisor > gcd ? divisor : gcd;
  }
}

console.log("gcd of",firstNumber,"and",secondNumber,"is",gcd);
