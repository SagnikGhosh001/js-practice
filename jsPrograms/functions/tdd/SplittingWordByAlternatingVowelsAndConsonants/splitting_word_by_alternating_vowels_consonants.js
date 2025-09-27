let globalTrackString = "";

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

function updateTracking(index) {
  let newtrack = "";
  for (let newIndex = 0; newIndex < globalTrackString.length; newIndex++) {
    if (newIndex === index) {
      newtrack += "1";
    } else {
      newtrack += globalTrackString[newIndex];
    }
  }
  globalTrackString = newtrack;
}

function extractString(string, startIndex) {
  let resultString = string[startIndex];

  for (let index = startIndex + 1; index < string.length; index++) {
    if (isVowel(resultString[resultString.length - 1]) !== isVowel(string[index]) && globalTrackString[index] === "0") {
      resultString += string[index];
      updateTracking(index)
    }
  }

  return resultString;
}

function splittingWord(string) {
  let resultString = "";
  for (let index = 0; index < string.length; index++) {
    globalTrackString += "0";
  }

  let index = 0;

  while (index < string.length) {

    if (globalTrackString[index] === "0") {    
      updateTracking(index);
      resultString = resultString + extractString(string, index) + ",";
    }
    index++;
  }

  globalTrackString = "";
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
  testSplittingWord("apple", "ape,p,l,");
  testSplittingWord("there", "tere,h,");
  testSplittingWord("hello", "helo,l,");
  testSplittingWord("abyys", "ab,y,y,s,");
  testSplittingWord("this", "tis,h,");
  testSplittingWord("aaabbb", "ab,ab,ab,");
  testSplittingWord("aaaeee", "a,a,a,e,e,e,");
}

main();
