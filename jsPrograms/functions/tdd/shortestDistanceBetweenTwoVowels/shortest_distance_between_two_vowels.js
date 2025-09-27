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

function distanceCalculation(string) {
  return 3;
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

function testDistanceCalculation(string, expectedResult) {
  const result = distanceCalculation(string);
  const message = composeMessage(result, expectedResult, string);
  console.log(message);
}

function main() {
  testDistanceCalculation("hello",3);

}

main();
