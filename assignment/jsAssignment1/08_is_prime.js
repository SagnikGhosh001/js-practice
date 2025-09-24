function checkHasFactor(primeCandidate, divisor) {  
  return (primeCandidate % divisor === 0);
}

function checkIsPrime(primeCandidate) {
  if (primeCandidate <= 1) {
    return false;
  }

  let divisor = 2;
  while (divisor < primeCandidate) {
    if (checkHasFactor(primeCandidate,divisor)) {
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

function testFindAllPrimeInRange(primeCandidate, expectedResult) {
  const result = checkIsPrime(primeCandidate);
  const message = composeMessage(result, expectedResult, primeCandidate);
  console.log(message);
}

function main() {
  testFindAllPrimeInRange(-1, false);
  testFindAllPrimeInRange(1, false);
  testFindAllPrimeInRange(2, true);
  testFindAllPrimeInRange(3, true);
  testFindAllPrimeInRange(4, false);
  testFindAllPrimeInRange(5, true);
  testFindAllPrimeInRange(6, false);
  testFindAllPrimeInRange(7, true);
  testFindAllPrimeInRange(8, false);
  testFindAllPrimeInRange(9, false);
  testFindAllPrimeInRange(10, false);
  testFindAllPrimeInRange(11, true);
}

main();
