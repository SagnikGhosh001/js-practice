function calculatingFactorial(value) {
  let factorial = 1;

  for (let currentTerm = 1; currentTerm <= value; currentTerm++) {
    factorial = factorial * currentTerm;
  }
  return factorial;
}

function composeMessage(result, expectedResult, factorial) {
  const emoji = (result === expectedResult) ? "✅" : "❌";
  const message = emoji + "value = " + factorial + " factorial = " + result + " expected factorial = " + expectedResult;
  return message;
}

function testFactorial(value, expectedResult) {
  const result = calculatingFactorial(value);
  const message = composeMessage(result, expectedResult, value);
  console.log(message);
}

function main() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
}

main();
