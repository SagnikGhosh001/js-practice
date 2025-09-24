function calculateNthFibonacciTerm(nThTerm) {
  let currentValue = 0;
  let nextValue = 1;

  for (let currentTerm = 1; currentTerm < nThTerm; currentTerm++) {
    const futureValue = currentValue + nextValue;
    currentValue = nextValue;
    nextValue = futureValue;
  }

  return currentValue;
}

function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, nThTerm) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "nTh term = " + nThTerm + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testNthFibonacciTerm(nThTerm, expectedResult) {
  const result = calculateNthFibonacciTerm(nThTerm);
  const message = composeMessage(result, expectedResult, nThTerm);
  console.log(message);
}

function main() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(6, 5);
}

main();
