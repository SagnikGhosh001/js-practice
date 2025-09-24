function printFibonacciSeries(rangeLimit) {
  let currentValue = 0;
  let nextValue = 1;
  let fibonacciSeriesString = "";

  for (let currentTerm = 1; currentTerm <= rangeLimit; currentTerm++) {
    fibonacciSeriesString = fibonacciSeriesString + currentValue + " ";
    const futureValue = currentValue + nextValue;
    currentValue = nextValue;
    nextValue = futureValue;
  }
  return fibonacciSeriesString;
}

function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, rangeLimit) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "limit of range = " + rangeLimit + " result = " + result + " expected sequence = " + expectedResult;
  return message;
}

function testFibonacciSeries(rangeLimit, expectedResult) {
  const result = printFibonacciSeries(rangeLimit);
  const message = composeMessage(result, expectedResult, rangeLimit);
  console.log(message);
}

function main() {
  testFibonacciSeries(1, "0 ");
  testFibonacciSeries(2, "0 1 ");
  testFibonacciSeries(3, "0 1 1 ");
  testFibonacciSeries(4, "0 1 1 2 ");
  testFibonacciSeries(5, "0 1 1 2 3 ");
  testFibonacciSeries(6, "0 1 1 2 3 5 ");
}

main();
