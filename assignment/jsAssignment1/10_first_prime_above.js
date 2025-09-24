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

function findFirstPrimeAfter(numberToCheckAfter) {
  let numberToPerformOperation = numberToCheckAfter + 1;

  while (true) {
    if (isPrime(numberToPerformOperation)) {
      return numberToPerformOperation;
    }

    numberToPerformOperation++;
  }
}

function getEmoji(result, expectedResult) {
  return (result === expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, numberToCheckAfter) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "Number to check after = " + numberToCheckAfter + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testFirstPrimeAbove(numberToCheckAfter, expectedResult) {
  const result = findFirstPrimeAfter(numberToCheckAfter);
  const message = composeMessage(result, expectedResult, numberToCheckAfter);
  console.log(message);
}

function main() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(10, 11);
  testFirstPrimeAbove(23, 29);
  testFirstPrimeAbove(13, 17);
}

main();
