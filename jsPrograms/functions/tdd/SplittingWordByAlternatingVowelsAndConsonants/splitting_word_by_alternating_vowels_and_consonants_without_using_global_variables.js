function isVowel(character) {
  const isA = character === "a";
  const isE = character === "e";
  const isI = character === "i";
  const isO = character === "o";
  const isU = character === "u";

  return isA || isE || isI || isO || isU;
}

function splitTheSegment(string) {
  let currentTerm = 0;
  let segment = "";

  while (string[currentTerm] !== "|") {
    segment = segment + string[currentTerm];
    currentTerm++;
  }

  return segment;
}

function splitRemainingString(string, startIndex) {
  let currentTerm = startIndex + 1;
  let remainingString = "";

  while (currentTerm < string.length) {
    remainingString = remainingString + string[currentTerm];
    currentTerm++;
  }

  return remainingString;
}

function splitAlternatingSegment(string) {
  let segmentString = string[0];
  let remainingString = "";

  for (let index = 1; index < string.length; index++) {
    const isSegmentStringLastCharVowel = isVowel(segmentString[segmentString.length - 1]);
    const isMainStringLastCharVowel = isVowel(string[index]);

    if (isSegmentStringLastCharVowel !== isMainStringLastCharVowel) {
      segmentString = segmentString + string[index];
    } else {
      remainingString = remainingString + string[index];
    }
  }

  return segmentString + '|' + remainingString;
}

function splitWordByAlternation(string) {
  let segmentString = "";
  let stringForOperation = string;

  while (stringForOperation !== "") {

    const result = splitAlternatingSegment(stringForOperation);
    const segment = splitTheSegment(result);
    segmentString = segmentString + segment + ",";
    stringForOperation = splitRemainingString(result, segment.length);
  }

  return segmentString;
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
  testSplittingWord("apple", "ape,p,l,");
  testSplittingWord("there", "tere,h,");
  testSplittingWord("hello", "helo,l,");
  testSplittingWord("abyys", "ab,y,y,s,");
  testSplittingWord("this", "tis,h,");
  testSplittingWord("aaabbb", "ab,ab,ab,");
  testSplittingWord("aaaeee", "a,a,a,e,e,e,");
  testSplittingWord("sagnik", "sagik,n,");
  testSplittingWord("three", "te,he,r,");
}

main();
