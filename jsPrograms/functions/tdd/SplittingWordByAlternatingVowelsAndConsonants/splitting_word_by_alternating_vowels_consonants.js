let globalTrackString = "1";

function isCharacterSame(character, smallCase, upperCase) {
  return character === smallCase || character === upperCase;
}

function isVowel(character) {
  const isA = isCharacterSame(character, "a", "A");
  const isE = isCharacterSame(character, "e", "E");
  const isI = isCharacterSame(character, "i", "I");
  const isO = isCharacterSame(character, "o", "O");
  const isU = isCharacterSame(character, "u", "U");
  return isA || isE || isI || isO || isU;
}

function extractString(string, startIndex) {
  let resultString = string[startIndex];

  for (let index = startIndex; index < string.length - 1; index++) {
    if (isVowel(resultString[index]) !== isVowel(string[index + 1]) && globalTrackString[index + 1] !== "1") {
      resultString += string[index + 1];
      globalTrackString += 1;
    } else {
      globalTrackString += "0";
    }
  }
  console.log(globalTrackString);
  
  return resultString;
}

function splittingWord(string) {
  let resultString = "";

  resultString = extractString(string, 0);

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
