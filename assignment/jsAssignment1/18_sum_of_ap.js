function calculatingApSeries(firstTerm, commonDifference, nThTerm) {
  let sum = 0;
  let numberToAdd = firstTerm;

  for (let currentNumber = 0; currentNumber < nThTerm; currentNumber++) {
    sum = sum + numberToAdd;
    numberToAdd = numberToAdd + commonDifference;
  }
  return sum;
}

function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, firstTerm, commonDifference, nThTerm) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "first term = " + firstTerm + " common difference = " + commonDifference + " nth term = " + nThTerm + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testSumOfAp(firstTerm, commonDifference, nThTerm, expectedResult) {
  const result = calculatingApSeries(firstTerm, commonDifference, nThTerm);
  const message = composeMessage(result, expectedResult, firstTerm, commonDifference, nThTerm);
  console.log(message);
}

function main() {
  testSumOfAp(2, 4, 10, 200);
  testSumOfAp(5, 2, 12, 192);
  testSumOfAp(1, 8, 7, 175);
  testSumOfAp(8, 2, 7, 98);
  testSumOfAp(10, 8, 7, 238);
}

main();
