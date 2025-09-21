const firstNumber = 7;
const secondNumber = 13;

let gcd = 1;
for (let divisor = 2; divisor <= firstNumber && divisor <= secondNumber; divisor++) {
  if(firstNumber % divisor === 0 && secondNumber % divisor === 0) {
    gcd = divisor > gcd ? divisor : gcd;
  }
}

const lcm =(firstNumber * secondNumber) / gcd;


console.log("lcm of",firstNumber,"and",secondNumber,"is",lcm);
