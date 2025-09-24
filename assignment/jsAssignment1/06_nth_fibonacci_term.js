function calculatingNthFibonacciTerm(term) {
  let currentValue = 0;
  let nextValue = 1;

  for (let currentTerm = 1; currentTerm < term; currentTerm++) {
    const futureValue = currentValue + nextValue;
    currentValue = nextValue;
    nextValue = futureValue;
  }

  return currentValue;


}
function composeMessage(result, expectedResult, term) {
  const emoji = (result === expectedResult) ? "✅" : "❌";
  const message = emoji + "value = " + term + " result = " + result + " expected factorial = " + expectedResult;
  return message;
}

function testNthFibonacciTerm(term, expectedResult) {
  const result = calculatingNthFibonacciTerm(term);
  const message = composeMessage(result, expectedResult, term);
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
