function calculatingSquareRoot(numberToCheckSquareRoot) {
  return numberToCheckSquareRoot ** 0.5;
}

function isApproximatelyEqual(result, expectedResult) {
  const tolerance = (expectedResult - result);
  return (tolerance <= 0.01) && (tolerance >= -0.01);
}

function getEmoji(result, expectedResult) {
  return isApproximatelyEqual(result, expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, numberToCheckSquareRoot) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "number = " + numberToCheckSquareRoot + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testSquareRoot(numberToCheckSquareRoot, expectedResult) {
  const result = calculatingSquareRoot(numberToCheckSquareRoot);
  const message = composeMessage(result, expectedResult, numberToCheckSquareRoot);
  console.log(message);
}

function main() {
  testSquareRoot(4, 2);
  testSquareRoot(2021, 44.95);
  testSquareRoot(5, 2.23);
  testSquareRoot(8, 2.82);
  testSquareRoot(100, 10);
}

main();
