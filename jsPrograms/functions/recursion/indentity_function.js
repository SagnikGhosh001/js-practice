function identity(number) {
  if (number === 0) {
    return 0;
  }
  return 1 + identity(number - 1);
}

function getEmoji(result, expectedOutput) {
  return result === expectedOutput ? "✅" : "❌";
}

function composeMessage(number, result, expectedOutput) {
  const emoji = getEmoji(result, expectedOutput);
  const inputSection = '[' + number + ']';
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

function testAll(number, expectedOutput) {
  const result = identity(number);
  const message = composeMessage(number, result, expectedOutput);
  console.log(message);
}

function main() {
  testAll(0, 0);
  testAll(1, 1);
  testAll(2, 2);
  testAll(3, 3);
  testAll(4, 4);
}

main();
