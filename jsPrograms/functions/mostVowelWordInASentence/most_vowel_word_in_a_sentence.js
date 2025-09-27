function isVowel(letter) {
  const isSmallAlphabetVowel = letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u";
  const isCapitalAlphabetVowel = letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U";
  return isSmallAlphabetVowel || isCapitalAlphabetVowel;
}

function findWordWithMostVowels(sentence) {
  let maximumCountOfVowel = 0;
  let currentCountOfvowel = 0;
  let wordWithMostVowel = "";
  let currentWord = "";

  for (let index = 0; index < sentence.length; index++) {
    const isNonSpaceChar = sentence[index] !== " ";

    currentWord = isNonSpaceChar ? currentWord + sentence[index] : currentWord;
    currentCountOfvowel = isVowel(sentence[index]) ? currentCountOfvowel + 1 : currentCountOfvowel;

    if (!isNonSpaceChar || index === sentence.length - 1) {
      if (currentCountOfvowel > maximumCountOfVowel) {
        maximumCountOfVowel = currentCountOfvowel;
        wordWithMostVowel = currentWord;
      }
      currentWord = "";
      currentCountOfvowel = 0;
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
  testAll("","");
  testAll(" ","");
}

main();
