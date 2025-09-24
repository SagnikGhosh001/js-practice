function hasFactor(primeCandidate, divisor) {
  return primeCandidate % divisor === 0;
}

function isPrime(primeCandidate) {
  if (primeCandidate <= 1) {
    return false;
  }

  let divisor = 2;
  while (divisor * divisor <= primeCandidate) {
    if (hasFactor(primeCandidate, divisor)) {
      return false;
    }
    divisor++;
  }
  return true;
}

function findAllPrimeInARange(startOfRange, endOfRange) {
  let primeSequence = "";

  for (let numberToCheck = startOfRange; numberToCheck <= endOfRange; numberToCheck++) {

    if (isPrime(numberToCheck)) {
      primeSequence = primeSequence + numberToCheck + " ";
    }
  }

  return primeSequence;
}

function getEmoji(result, expectedResult) {
  return (result === expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, startOfRange, endOfRange) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "start Of Range = " + startOfRange + " end Of Range = " + endOfRange + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testFindAllPrime(startOfRange, endOfRange, expectedResult) {
  const result = findAllPrimeInARange(startOfRange, endOfRange);
  const message = composeMessage(result, expectedResult, startOfRange, endOfRange);
  console.log(message);
}

function main() {
  testFindAllPrime(0, 10, "2 3 5 7 ");
  testFindAllPrime(10, 20, "11 13 17 19 ");
  testFindAllPrime(20, 30, "23 29 ");
  testFindAllPrime(30, 40, "31 37 ");
}

main();
