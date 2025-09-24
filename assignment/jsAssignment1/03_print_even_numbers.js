function oddEvenPrintInRange(startOfTheRange, endOfTheRange) {
  const startOfTheRangeBasedOnEvenOdd = (startOfTheRange % 2 === 0) ? startOfTheRange : startOfTheRange + 1;
  let oddEvenSeries = "";

  for (let currentNumber = startOfTheRangeBasedOnEvenOdd; currentNumber <= endOfTheRange; currentNumber = currentNumber + 2) {
    oddEvenSeries = oddEvenSeries + currentNumber + " ";
  }
  return oddEvenSeries;
}

function getEmoji(result, expectedResult) {
  return (result === expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, startOfTheRange, endOfTheRange) {
  const emoji = getEmoji(result,expectedResult);
  const message = emoji + " start Of The Range = " + startOfTheRange + " end Of The Range = " + endOfTheRange + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testOddEven(startOfTheRange, endOfTheRange, expectedResult) {
  const result = oddEvenPrintInRange(startOfTheRange, endOfTheRange);
  const message = composeMessage(result, expectedResult, startOfTheRange, endOfTheRange);
  console.log(message);
}

function main() {
  testOddEven(0,10,"0 2 4 6 8 10 ");
  testOddEven(11,20,"12 14 16 18 20 ");
  testOddEven(16,21,"16 18 20 ");
}

main();
