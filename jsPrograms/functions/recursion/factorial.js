function factorial(number) {
  if(number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

function getEmoji(result, expectedOutput) {
  return result === expectedOutput ? "✅" : "❌";
}

function composeMessage(number, result, expectedOutput) {
  const emoji = getEmoji(result, expectedOutput);
  const inputSection = '[' + number + ']';
  const resultSection = "result = " + result;
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
  const result = factorial(number);
  const message = composeMessage(number, result, expectedOutput);
  console.log(message);
}

function main() {
  testAll(0,1);
  testAll(1,1);
  testAll(2,2);
  testAll(3,6);
  testAll(4,24);
}

main();
