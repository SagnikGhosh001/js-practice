function calculatingReverseOfNumber(numberToCheck) {
  let numberForOperation = numberToCheck;
  let reverseOfNumber = 0;

  while (numberForOperation > 0) {
    const remainder = numberForOperation % 10;
    reverseOfNumber = (reverseOfNumber * 10) + remainder;
    numberForOperation = (numberForOperation - remainder) / 10;
  }
  return reverseOfNumber;
}

function checkIsPalindrome(numberToCheck) {
  let reverseOfNumber = calculatingReverseOfNumber(numberToCheck);
  return (reverseOfNumber === numberToCheck);
}

function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, numberToCheck) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "number To Check = " + numberToCheck + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testIspalindrome(numberToCheck, expectedResult) {
  const result = checkIsPalindrome(numberToCheck);
  const message = composeMessage(result, expectedResult, numberToCheck);
  console.log(message);
}

function main() {
  testIspalindrome(1, true);
  testIspalindrome(153, false);
  testIspalindrome(656, true);
  testIspalindrome(122, false);
  testIspalindrome(1221, true);
  testIspalindrome(164, false);
  testIspalindrome(1661, true);
}

main();
