function printEvenNumbersInRange(start, end) {
  const evenStart = (start % 2 === 0) ? start : start + 1;
  let evenNumbers = "";

  for (let currentNumber = evenStart; currentNumber <= end; currentNumber = currentNumber + 2) {
    evenNumbers = evenNumbers + currentNumber + " ";
  }
  return evenNumbers;
}

function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, start, end) {
  const emoji = getEmoji(result,expectedResult);
  const message = emoji + " start Of The Range = " + start + " end Of The Range = " + end + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testPrintEvenNumbersInRange(start, end, expectedResult) {
  const result = printEvenNumbersInRange(start, end);
  const message = composeMessage(result, expectedResult, start, end);
  console.log(message);
}

function main() {
  testPrintEvenNumbersInRange(0,10,"0 2 4 6 8 10 ");
  testPrintEvenNumbersInRange(11,20,"12 14 16 18 20 ");
  testPrintEvenNumbersInRange(16,21,"16 18 20 ");
}

main();
