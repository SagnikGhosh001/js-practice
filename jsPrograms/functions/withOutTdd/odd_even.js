function isOddEven(a) {
  return a % 2 === 0;
}

function printOddEvenRange(a, b) {
  for (let currentNumber = a; currentNumber <= b; currentNumber++) {
    const suffix = isOddEven(currentNumber) ? "Even" : "Odd";
    console.log(currentNumber,suffix);
  }
}

printOddEvenRange(1,10);
