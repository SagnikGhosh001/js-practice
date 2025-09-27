function isCharacterSame(character, smallCase, upperCase) {
  return character === smallCase || character === upperCase;
}
function isVowel(character) {
  const isA = isCharacterSame(character, "a", "A");
  const isE = isCharacterSame(character, "i", "A");
  const isI = isCharacterSame(character, "e", "A");
  const isO = isCharacterSame(character, "o", "A");
  const isU = isCharacterSame(character, "u", "A");
  return isA || isE || isI || isO || isU;
}

function findWordWithMostVowels(sentence) {
  let maximumVowelCount = 0;
  let vowelCount = 0;
  let wordWithMostVowel = "";
  let currentWord = "";

  for (let index = 0; index < sentence.length; index++) {
    const isNonSpaceChar = sentence[index] !== " ";
    const currentChar = sentence[index];

    currentWord = isNonSpaceChar ? currentWord + currentChar : currentWord;
    vowelCount = isVowel(currentChar) ? vowelCount + 1 : vowelCount;

    if (!isNonSpaceChar || index === sentence.length - 1) {
      if (vowelCount > maximumVowelCount) {
        maximumVowelCount = vowelCount;
        wordWithMostVowel = currentWord;
      }
      currentWord = "";
      vowelCount = 0;
    }
  }
  return wordWithMostVowel;
}

function getEmoji(result, expectedOutput) {
  return result === expectedOutput ? "✅" : "❌";
}

function composeMessage(sentence, result, expectedOutput) {
  const emoji = getEmoji(result, expectedOutput);
  const inputSection = '[' + sentence + ']';
  const resultSection = "' result = '" + result;
  const expectedResultSection = "' expected output = " + expectedOutput;

  let message = emoji;
  message += '|';
  message += inputSection
  message += '|';
  message += resultSection
  message += '|';
  message += expectedResultSection;

  return message;
}

function testAll(sentence, expectedOutput) {
  const result = findWordWithMostVowels(sentence);
  const message = composeMessage(sentence, result, expectedOutput);
  console.log(message);
}

function main() {
  testAll("hello aeiouaeiuo am sagnik", "aeiouaeiuo");
  testAll("a dog barks at night", "a");
  testAll("i go to school", "school");
  testAll("i miss this puja vacation", "vacation");
  testAll("ajoy loves someone", "someone");
  testAll("", "");
  testAll(" ", "");
}

main();
