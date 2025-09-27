function isCharacterSame(character, smallCase, upperCase) {
  return character === smallCase || character === upperCase;
}
function isVowel(character) {
  const isA = isCharacterSame(character, "a", "A");
  const isE = isCharacterSame(character, "i", "E");
  const isI = isCharacterSame(character, "e", "I");
  const isO = isCharacterSame(character, "o", "O");
  const isU = isCharacterSame(character, "u", "U");
  return isA || isE || isI || isO || isU;
}

function extractString(string, index) {
  let resultString = string[index];
  let trackOfUsedLetter ="1";

  for (let index = 1; index < string.length; index++) {
    if (isVowel(resultString[index - 1]) !== isVowel(string[index])) {
      resultString += string[index];
      trackOfUsedLetter += "1";
    } else {
      trackOfUsedLetter += "0";
    }
  }
  console.log(trackOfUsedLetter);
  
  return resultString;
}

function splittingWord(string) {
  let index = 0;
  let resultString = extractString(string, index);

  return resultString;
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
  testSplittingWord("apple", "ape,p,l")
}

main();
