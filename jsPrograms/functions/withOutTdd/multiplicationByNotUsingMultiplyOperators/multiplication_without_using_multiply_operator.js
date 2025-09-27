function identity(number) {
  return number;
}

function performMultiplication(firstNumber, secondNumber) {
  let result = 0;
  for (let term = 1; term <= secondNumber; term++) {
    result = result + identity(firstNumber);
  }
  return result;
}

const product = performMultiplication(3,12);
console.log(product);
