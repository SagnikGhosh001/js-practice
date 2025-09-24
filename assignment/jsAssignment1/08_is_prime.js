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

function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, primeCandidate) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "number to check = " + primeCandidate + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testIsPrime(primeCandidate, expectedResult) {
  const result = isPrime(primeCandidate);
  const message = composeMessage(result, expectedResult, primeCandidate);
  console.log(message);
}

function main() {
  testIsPrime(-1, false);
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(4, false);
  testIsPrime(5, true);
  testIsPrime(6, false);
  testIsPrime(7, true);
  testIsPrime(8, false);
  testIsPrime(9, false);
  testIsPrime(10, false);
  testIsPrime(11, true);
}

main();
