function calculateFactorial(numberToCheckFactorial) {
  let factorial = 1;

  for (let currentTerm = 1; currentTerm <= numberToCheckFactorial; currentTerm++) {
    factorial = factorial * currentTerm;
  }
  return factorial;
}

function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, numberToCheckFactorial) {
  const emoji = getEmoji(result,expectedResult);
  const message = emoji + "value = " + numberToCheckFactorial + " factorial = " + result + " expected factorial = " + expectedResult;
  return message;
}

function testFactorial(numberToCheckFactorial, expectedResult) {
  const result = calculateFactorial(numberToCheckFactorial);
  const message = composeMessage(result, expectedResult, numberToCheckFactorial);
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
