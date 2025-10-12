// Mixed case sentences (upper and lower case)
const mixedCaseSentences = [
  "The quick brown Fox jumps over the lazy Dog",
  "JavaScript is Fun and Powerful",
  "This is a Test Sentence with Mixed CASE",
  "Typing Practice Is Essential To Improve Speed",
  "Every Developer Should Master the Basics"
];

// Uppercase and lowercase with punctuation
const punctuatedMixedSentences = [
  "Hello, world!",
  "Can you believe it? This works perfectly.",
  "Practice daily; improve consistently.",
  "Well done! You’ve completed the first step.",
  "Wait... are you serious?"
];

// Lowercase only, no punctuation
const lowercaseNoPunctuation = [
  "the quick brown fox jumps over the lazy dog",
  "javascript is fun to learn and use",
  "typing fast requires a lot of practice",
  "consistency is the key to improvement",
  "never give up keep practicing"
];

// Lowercase with punctuation
const lowercaseWithPunctuation = [
  "the quick brown fox jumps over the lazy dog.",
  "javascript is fun to learn, isn't it?",
  "typing fast requires effort, practice, and focus.",
  "consistency is key: never stop practicing.",
  "never give up! keep going no matter what."
];

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

function underline(text) {
  return "\x1B[4m" + text + "\x1B[0m";
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}

function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}

function countWords(sentence) {
  const sentenceForOperation = sentence;
  let countOfWords = 1;

  for (let index = 0; index < sentenceForOperation.length; index++) {
    if (sentenceForOperation[index] === " ") {
      countOfWords++;
    }
  }

  return countOfWords;
}

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function calculateWpm(sentence, startTime, endTime) {
  const wordCount = countWords(sentence);
  const timeInMinutes = (endTime - startTime) / 60000;
  return wordCount / timeInMinutes;

}

function calculateMistake(orginalSentence, typedSentence) {
  let totalCorrect = 0;
  for (let index = 0; index < orginalSentence.length; index++) {
    if (orginalSentence[index] === typedSentence[index]) {
      totalCorrect++;
    }
  }

  return totalCorrect;
}

function calculateAccuracy(orginalSentence, typedSentence) {
  const totalCorrect = calculateMistake(orginalSentence, typedSentence);
  const accuracy = (totalCorrect / orginalSentence.length) * 100;
  return accuracy;
}

function showResultString(orginalSentence, typedSentence) {
  let string = "";
  for (let index = 0; index < orginalSentence.length; index++) {
    string += orginalSentence[index] === typedSentence[index] ? green(typedSentence[index]) : bold(underline(red(typedSentence[index])));
  }

  return string;
}

function startTyping(sentences) {
  console.clear();
  const sentence = sentences[randomNumberBetween(0, sentences.length - 1)];
  console.log(sentence);
  const startTime = Date.now();
  const answear = prompt("").trim();
  const endTime = Date.now();
  
  const wpm = calculateWpm(sentence, startTime, endTime);
  const accuracy = calculateAccuracy(sentence, answear);
  console.clear();
  console.log(sentence);
  const result = showResultString(sentence, answear);
  console.log(result);
  console.log(`WPM = ${wpm} and Accuracy = ${accuracy}`);

}

function chooseMode() {
  console.log("Chose what mode do you want");
  console.log("1.for Mixed case sentences (upper and lower case)");
  console.log("2.for Uppercase and lowercase with punctuation");
  console.log("3.for Lowercase only, no punctuation");
  console.log("4.for Lowercase with punctuation");
  const response = prompt("Choose Mode:-");
  const mode = parseInt(response);
  if (mode >= 1 && mode <= 4) {
    return mode;
  }

  console.log("Choose valid mode");
  return chooseMode()
}

function main() {
  const mode = chooseMode();
  prompt("\nReady To Start Typing ?\nAfter Pressing Enter Start Typing....");

  switch (mode) {
    case 1:
      startTyping(mixedCaseSentences);
      break;
    case 2:
      startTyping(punctuatedMixedSentences);
      break;
    case 3:
      startTyping(lowercaseNoPunctuation);
      break;
    case 4:
      startTyping(lowercaseWithPunctuation);
      break;
  }
}

main();
