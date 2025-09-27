let usedCharTrackString = "";

function isVowel(character) {
  const isA = character === "a";
  const isE = character === "e";
  const isI = character === "i";
  const isO = character === "o";
  const isU = character === "u";

  return isA || isE || isI || isO || isU;
}

function updateTracking(matchingIndex) {
  let updatedTrack = "";

  for (let index = 0; index < usedCharTrackString.length; index++) {
    const isIndexMatch = index === matchingIndex;

    updatedTrack += isIndexMatch ? "1" : usedCharTrackString[index];
  }

  usedCharTrackString = updatedTrack;
}

function extractString(string, startIndex) {
  let splitString = string[startIndex];

  for (let index = startIndex + 1; index < string.length; index++) {
    const stringLength = splitString.length;
    const isSplitStringLastCharVowel = isVowel(splitString[stringLength - 1]);
    const isMainStringLastCharVowel = isVowel(string[index]);
    const consonantCheck = isSplitStringLastCharVowel !== isMainStringLastCharVowel;

    if (consonantCheck && usedCharTrackString[index] === "0") {
      splitString = splitString + string[index];
      updateTracking(index);
    }
  }

  return splitString;
}

function splittingWord(string) {
  let splitString = "";
  for (let index = 0; index < string.length; index++) {
    usedCharTrackString = usedCharTrackString + "0";
  }

  let index = 0;
  while (index < string.length) {

    if (usedCharTrackString[index] === "0") {
      updateTracking(index);
      splitString = splitString + extractString(string, index) + ",";
    }
    index++;
  }

  usedCharTrackString = "";
  return splitString;
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
  testSplittingWord("sagnik", "sagik,n,");
}

main();
