function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function hcfOfTwoNumbers(firstNumber, secondNumber) {
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

function lcmOfTwoNumbers(firstNumber, secondNumber) {
  const hcf = hcfOfTwoNumbers(firstNumber, secondNumber)
  return (firstNumber * secondNumber) / hcf;
}


function getEmoji(result, expectedResult) {
  return (result === expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, firstNumber, secondNumber) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "first number = " + firstNumber + " second number = " + secondNumber + " lcm = " + result + " expected lcm = " + expectedResult;
  return message;
}

function testLcm(firstNumber, secondNumber, expectedResult) {
  const result = lcmOfTwoNumbers(firstNumber, secondNumber);
  const message = composeMessage(result, expectedResult, firstNumber, secondNumber);
  console.log(message);
}

function main() {
  testLcm(0, 2, 0);
  testLcm(10, 11, 110);
  testLcm(1, 1, 1);
  testLcm(1, 1000, 1000);
  testLcm(12, 18, 36);
  testLcm(100, 10, 100);
  testLcm(17, 31, 527);
  testLcm(24, 36, 72);
  testLcm(13, 13, 13);
  testLcm(0, 0, 0);
}

main();
