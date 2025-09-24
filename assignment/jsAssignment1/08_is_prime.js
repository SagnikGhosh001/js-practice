function checkIsPrime(primeCandidate) {
  if (primeCandidate === 1) {
    return false;
  }

  let divisor = 2;
  while (divisor < primeCandidate) {
    if (primeCandidate % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
}

function getEmoji(result, expectedResult) {
  return (result === expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, primeCandidate) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "number to check = " + primeCandidate + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testIsPrime(rangeLimit, expectedResult) {
  const result = checkIsPrime(rangeLimit);
  const message = composeMessage(result, expectedResult, rangeLimit);
  console.log(message);
}

function main() {
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
