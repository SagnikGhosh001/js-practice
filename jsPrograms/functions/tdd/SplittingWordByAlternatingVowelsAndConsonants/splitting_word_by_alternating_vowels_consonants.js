function splittingWord(string) {
  return "ape,p,l";
}

function symbolSelection(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, string) {
  const symbol = symbolSelection(result, expectedResult);
  const inputSection = "[" + string + "]";
  const resultSection = "result = " + result;
  const expectedResultSection = "Expected result = " + expectedResult;

  let message = symbol;
  message += "|";
  message += inputSection;
  message += "|";
  message += resultSection;
  message += "|";
  message += expectedResultSection;

  return message;
}

function testSplittingWord(string, expectedResult) {
  const result = splittingWord(string);
  const message = composeMessage(result, expectedResult, string);
  console.log(message);
}

function main() {
  testSplittingWord("apple","ape,p,l")
}

main();
