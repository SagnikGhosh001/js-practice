function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function hcfOfTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber === 0) {
    return secondNumber;
  }

  if (secondNumber === 0) {
    return firstNumber;
  }
  let hcf = 1;
  let divisor = 1;

  while (divisor <= firstNumber && divisor <= secondNumber) {
    const isFirstNumberDivisible = isDivisible(firstNumber, divisor);
    const isSecondNumberDivisible = isDivisible(secondNumber, divisor);
    hcf = (isFirstNumberDivisible && isSecondNumberDivisible) ? divisor : hcf;
    divisor++;
  }
  return hcf;
}

function getEmoji(result, expectedResult) {
  return (result === expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, firstNumber, secondNumber) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "first number = " + firstNumber + " second number = " + secondNumber + " hcf = " + result + " expected hcf = " + expectedResult;
  return message;
}

function testHcf(firstNumber, secondNumber, expectedResult) {
  const result = hcfOfTwoNumbers(firstNumber, secondNumber);
  const message = composeMessage(result, expectedResult, firstNumber, secondNumber);
  console.log(message);
}

function main() {
  testHcf(0, 2, 2);
  testHcf(0, 0, 0);
  testHcf(1, 1, 1);
  testHcf(1, 1000, 1);
  testHcf(12, 18, 6);
  testHcf(17, 31, 1);
  testHcf(10, 100, 10);
  testHcf(24, 36, 12);
  testHcf(13, 13, 13);
  testHcf(10, 11, 1);
  testHcf(4, 4, 4);
  testHcf(25, 5, 5);
  testHcf(45, 63, 9);
}

main();
