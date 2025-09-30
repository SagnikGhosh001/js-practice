function power(number, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return number * power(number, exponent - 1);
}

function getEmoji(result, expectedOutput) {
  return result === expectedOutput ? "✅" : "❌";
}

function composeMessage(number, exponent, result, expectedOutput) {
  const emoji = getEmoji(result, expectedOutput);
  const inputSection = '[' + number + ',' + exponent + ']';
  const resultSection = "' result = '" + result;
  const expectedResultSection = "' expected output = " + expectedOutput;

  let message = emoji;
  message += '|';
  message += inputSection
  message += '|';
  message += resultSection
  message += '|';
  message += expectedResultSection;

  return message;
}

function testAll(number, exponent, expectedOutput) {
  const result = power(number, exponent);
  const message = composeMessage(number, exponent, result, expectedOutput);
  console.log(message);
}

function main() {
  testAll(2, 3, 8);
  testAll(3, 2, 9);
  testAll(5, 2, 25);
  testAll(0, 1, 0);
  testAll(0, 0, 1);
  testAll(5, 0, 1);
  testAll(5, 1, 5);
}

main();
