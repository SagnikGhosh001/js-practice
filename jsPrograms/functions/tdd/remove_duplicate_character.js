function hasCharacters(string, character) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === character) {
      return true;
    }
  }

  return false;
}

function removeDuplicate(string) {
  let uniqueChars = "";

  for (let index = 0; index < string.length; index++) {
    const isCharAvailable = hasCharacters(uniqueChars, string[index]);
    uniqueChars = isCharAvailable ? uniqueChars : uniqueChars + string[index];
  }

  return uniqueChars;
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

function testRemoveDuplicate(string, expectedResult) {
  const result = removeDuplicate(string);
  const message = composeMessage(result, expectedResult, string);
  console.log(message);
}

function main() {
  testRemoveDuplicate("aabbcc", "abc");
  testRemoveDuplicate("hello", "helo");
  testRemoveDuplicate("apple", "aple");
  testRemoveDuplicate("banana", "ban");
  testRemoveDuplicate("AaBbCc", "AaBbCc");
  testRemoveDuplicate("AAaaBBbb", "AaBb");
  testRemoveDuplicate("", "");
  testRemoveDuplicate("a", "a");
  testRemoveDuplicate("aaaaa", "a");
  testRemoveDuplicate("abcabcabc", "abc");
  testRemoveDuplicate("cababc", "cab");
  testRemoveDuplicate("xyzzyx", "xyz");
  testRemoveDuplicate("112233", "123");
  testRemoveDuplicate("!@!!@@##", "!@#");
  testRemoveDuplicate("abc123abc123", "abc123");

}

main();
