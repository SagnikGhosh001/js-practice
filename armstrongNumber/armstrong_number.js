const limit = 500;
const startingValue = 1;

console.log("All armstrong numbers between", startingValue, "to", limit, "are :-");

for (let number = startingValue; number < limit; number++) {
  let copyOfNumber = number;
  const numberToString = number + "";
  const countOfDigit = numberToString.length;
  let sum = 0;
  
  while (copyOfNumber !== 0) {
    let remainder = 0;
    remainder = copyOfNumber % 10;
    sum = sum + (remainder ** countOfDigit);
    copyOfNumber = copyOfNumber / 10;

    if (remainder) {
      copyOfNumber = copyOfNumber - (remainder / 10);
    }
  }

  if (sum === number) {
    console.log(number);
  }
  
}
