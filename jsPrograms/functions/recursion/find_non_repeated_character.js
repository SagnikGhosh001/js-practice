function isRepeatation(string, currIndex, matchIndex) {
  if (matchIndex === string.length) {
    return true;
  }

  if (string[currIndex] === string[matchIndex] && currIndex !== matchIndex) {
    return false;
  }

  return isRepeatation(string, currIndex, matchIndex + 1);
}

function findNonRepeatedCharacter(string, index) {
  if (index === string.length) {
    return "";
  }

  if (isRepeatation(string, index, 0)) {
    return string[index];
  }

  return findNonRepeatedCharacter(string, index + 1);
}

function nonRepeatedCharacter(string) {
  return findNonRepeatedCharacter(string, 0);
}

function getEmoji(result, expected) {
  return result === expected ? "✅" : "❌";
}

function composeMsg(result, expected, string, purpose) {
  const emoji = getEmoji(result, expected);
  const inputSection = "Inputs : [" + string + "]";
  const resultSection = "result = " + result;
  const expectedSection = "expected result = " + expected;
  let message = emoji + purpose;
  if (result !== expected) {
    message += '\n\n' + inputSection;
    message += '\n' + resultSection;
    message += '\n' + expectedSection;
    message += "\n__________\n";
  }
  return message;
}

function testNonRepeatedCharacter(string, expected, purpose) {
  const result = nonRepeatedCharacter(string);
  const msg = composeMsg(result, expected, string, purpose);
  console.log(msg);
}

function main() {
  testNonRepeatedCharacter("swiss", "w", "for second char unique");
  testNonRepeatedCharacter("a", "a", "for single char");
  testNonRepeatedCharacter("abcabcde", "d", "multiple repeatation diff index");
  testNonRepeatedCharacter("aaabbbccc", "", "no unique char");
  testNonRepeatedCharacter("aac", "c", "last char is unique");
}

main();
