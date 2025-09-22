const numberToCheck = 14;

let numberForOperation = numberToCheck;
let sumOfDigit = 0;

while (numberForOperation !== 0) {
  let remainder = 0;
  remainder = numberForOperation % 10;
  sumOfDigit = sumOfDigit + remainder;
  numberForOperation = (numberForOperation - remainder) / 10;
}

let isHarshd = (numberToCheck % sumOfDigit === 0);

const suffix = isHarshd ? "a harshad number" : "not a harshad number";
console.log(numberToCheck,"is",suffix)
