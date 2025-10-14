
// This program generates random sentences using a simple grammar
// Each grammar rule can be expanded into one of its productions

// Grammar rules defined as an object where each key is a rule
// and the value is an array of possible expansions
function createGrammar() {
  const grammar = {
    START: [['SENTENCE']],
    SENTENCE: [['NOUN_FRAGMENT', 'VERB_FRAGMENT']],
    NOUN_FRAGMENT: [
      ['ARTICLE', 'NOUN'],
      ['ARTICLE', 'ADJECTIVE', 'NOUN'],
    ],
    VERB_FRAGMENT: [['VERB'], ['VERB', 'NOUN_FRAGMENT']],
    ARTICLE: [['the'], ['a'], ['an']],
    ADJECTIVE: [['happy'], ['sad'], ['tall'], ['small'], ['beautiful'], ['fast']],
    NOUN: [['boy'], ['girl'], ['horse'], ['flower'], ['car'], ['table']],
    VERB: [['runs'], ['jumps'], ['sleeps'], ['sees'], ['likes'], ['eat']],
  };
  return grammar;
}

// Function to randomly select one production from an array of productions
function chooseRandomProduction(productions) {
  const randomIndex = Math.floor(Math.random() * productions.length);
  return productions[randomIndex];
}

// Function to check if a symbol is terminal (actual word) or non-terminal (needs expansion)
function isTerminal(symbol) {
  // If the symbol is lowercase, it's a terminal (actual word)
  return symbol === symbol.toLowerCase();
}

// Function to expand a symbol according to grammar rules
function expandSymbol(symbol, grammar) {
  // If it's a terminal, return it as is
  if (isTerminal(symbol)) {
    return symbol;
  }

  // Otherwise, find the rule for this symbol
  const productions = grammar[symbol];
  if (!productions) {
    console.log(`Error: No rule found for symbol ${symbol}`);
    return '';
  }

  // Choose one production randomly
  const chosenProduction = chooseRandomProduction(productions);

  // Expand each symbol in the chosen production
  let result = [];
  for (let i = 0; i < chosenProduction.length; i++) {
    const expanded = expandSymbol(chosenProduction[i], grammar);
    result.push(expanded);
  }

  return result.join(' ');
}

// Generate a sentence by starting with the START rule
function generateSentence(yourText) {
  if (yourText !== "") return yourText;
  const grammar = createGrammar();
  return expandSymbol('START', grammar);
}

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

function startTyping(text = "") {
  console.clear();
  const sentence = generateSentence(text);
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

function main() {
  const responce = confirm("Do You Want To Practice With Own Sentence:-");
  if (responce) {
    const text = prompt("type your sentence:-").trim();
    startTyping(text);
    return;
  }

  startTyping();
}

main();
