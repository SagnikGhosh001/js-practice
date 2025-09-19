const rangeLimit = 7;
let previousNumber = 0;
let currentNumber = 1;

console.log(previousNumber + "\n" + currentNumber );

for(let iterationCount = 2; iterationCount < rangeLimit; iterationCount++) {
  
  let nextNumber = previousNumber + currentNumber;
  console.log(nextNumber);
  
  previousNumber = currentNumber;
  currentNumber = nextNumber;

}

