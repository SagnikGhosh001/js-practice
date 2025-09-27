function isCharacterAvailable(string, character) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === character) {
      return true;
    }
  }
  
  return false;
}

function removeDuplicate(string) {
  return 'a';
}

function symbolSelection(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, string) {
  const symbol = symbolSelection(result, expectedResult);
  const inputSection = "[" + result + "]";
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

function testRemoveDuplicate(string, expectedResult) {
  const result = removeDuplicate(string);
  const message = composeMessage(result, expectedResult, string);
  console.log(message);
}

function main() {
  testRemoveDuplicate("a", "a");
  testRemoveDuplicate("aaaa", "a");
  testRemoveDuplicate("abca", "abc");
}

main();
