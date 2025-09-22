const statingRange = 1;
const endOfRange = 50;

console.log("Harshad Numbers betweeen",statingRange,"and",endOfRange,"is:-");

for (let numberToCheck = statingRange; numberToCheck <= endOfRange; numberToCheck++) {

  let numberForOperation = numberToCheck;
  let sumOfDigit = 0;
  
  while (numberForOperation !== 0) {
    let remainder = 0;
    remainder = numberForOperation % 10;
    sumOfDigit = sumOfDigit + remainder;
    numberForOperation = (numberForOperation - remainder) / 10;
  }
  
  if (numberToCheck % sumOfDigit === 0) {
    console.log(numberToCheck);
  }  
}
