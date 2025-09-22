const numberToCheck = 12;

let numberForOperation = numberToCheck;
let sumOfDigit = 0;
let remainder = 0;

if(numberForOperation !== 0) {
  remainder = numberForOperation % 10;
  sumOfDigit = sumOfDigit + remainder;
  numberForOperation = (numberForOperation - remainder) / 10;
}


if(numberForOperation !== 0) {
  remainder = numberForOperation % 10;
  sumOfDigit = sumOfDigit + remainder;
  numberForOperation = (numberForOperation - remainder) / 10;
}

let isHarshd = (numberToCheck % sumOfDigit === 0);

const suffix = isHarshd ? "harshad number" : "not a harshad number";
console.log(numberToCheck,suffix)
