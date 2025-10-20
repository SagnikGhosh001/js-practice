function isVowel(character) {
  const isA = character === "a";
  const isE = character === "e";
  const isI = character === "i";
  const isO = character === "o";
  const isU = character === "u";

  return isA || isE || isI || isO || isU;
}

function makeSegmentStructure(segmentString, remainingString) {
  if (remainingString.length <= 0) {
    return segmentString;
  }

  return  segmentString + "," + remainingString[0];
}

function splitWordByAlternation(string, segmentString = string[0], index = 1, remainingString = "") {
  if (string.length === 0) {
    return segmentString;
  }

  if (index === string.length) {
    segmentString = makeSegmentStructure(segmentString, remainingString);
    return splitWordByAlternation(remainingString, segmentString);
  }

  const isSegmentStringLastCharVowel = isVowel(segmentString[segmentString.length - 1]);
  const isMainStringLastCharVowel = isVowel(string[index]);

  if (isSegmentStringLastCharVowel !== isMainStringLastCharVowel) {
    segmentString = segmentString + string[index];
  } else {
    remainingString = remainingString + string[index];
  }

  return splitWordByAlternation(string, segmentString, index + 1, remainingString)
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
  const result = splitWordByAlternation(string);
  const message = composeMessage(result, expectedResult, string);
  console.log(message);
}

function main() {
  testSplittingWord("apple", "ape,p,l");
  testSplittingWord("there", "tere,h");
  testSplittingWord("hello", "helo,l");
  testSplittingWord("abyys", "ab,y,y,s");
  testSplittingWord("this", "tis,h");
  testSplittingWord("aaabbb", "ab,ab,ab");
  testSplittingWord("aaaeee", "a,a,a,e,e,e");
  testSplittingWord("sagnik", "sagik,n");
  testSplittingWord("three", "te,he,r");
}

main();
