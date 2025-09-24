function isDivisible(yearToCheck, divisor) {
  return yearToCheck % divisor === 0;
}

function isLeapYearChecking(yearToCheck) {
  const isDivisibleByFour = isDivisible(yearToCheck, 4);
  const isNotDivisibleByHundred = !isDivisible(yearToCheck, 100);
  const isDivisableByFourHundred = isDivisible(yearToCheck, 400);

  const isLeapYear = isDivisibleByFour && isNotDivisibleByHundred || isDivisableByFourHundred;

  return isLeapYear;

}

function getEmoji(result, expectedResult) {
  return (result === expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, yearToCheck) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "year = " + yearToCheck + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testLeapyear(yearToCheck, expectedResult) {
  const result = isLeapYearChecking(yearToCheck);
  const message = composeMessage(result, expectedResult, yearToCheck);
  console.log(message);
}

function main() {
  testLeapyear(2020, true);
  testLeapyear(2021, false);
  testLeapyear(1900, false);
  testLeapyear(2000, true);
  testLeapyear(2024, true);
}

main();
