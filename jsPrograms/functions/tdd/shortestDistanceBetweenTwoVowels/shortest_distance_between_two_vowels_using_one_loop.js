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

function shortestDistanceBetweenVowels(string) {
  let shortestDistance = Infinity;
  let lastVowelIndex = 0;
  let currentChar = string[0];
  let index = 0;

  while (index < string.length) {
    if (!isVowel(currentChar)) {
      currentChar = string[index];
      lastVowelIndex = isVowel(currentChar) ? index : lastVowelIndex;
    }

    if (index !== lastVowelIndex && isVowel(string[index])) {
      const distance = index - lastVowelIndex;
      shortestDistance = distance < shortestDistance ? distance : shortestDistance;
      lastVowelIndex = index;
    }
    index++;
  }

  return shortestDistance === Infinity ? -1 : shortestDistance;
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
  const result = shortestDistanceBetweenVowels(string);
  const message = composeMessage(result, expectedResult, string);
  console.log(message);
}

function main() {
  testDistanceCalculation("hello", 3);
  testDistanceCalculation("apple", 4);
  testDistanceCalculation("strength", -1);
  testDistanceCalculation("beautiful", 1);
  testDistanceCalculation("abyss", -1);
  testDistanceCalculation("a", -1);
  testDistanceCalculation("aeiou", 1);
  testDistanceCalculation("bbbbbb", -1);
  testDistanceCalculation("coding", 2);
  testDistanceCalculation("queueing", 1);
  testDistanceCalculation("sequence", 1);
  testDistanceCalculation("onomatopoeia", 1);
  testDistanceCalculation("education", 1);
  testDistanceCalculation("communication", 1);
  testDistanceCalculation("strengths", -1);
  testDistanceCalculation("bbbba", -1);

}

main();
