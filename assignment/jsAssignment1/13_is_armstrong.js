function calculateLengthOfANumber(numberToCheck) {
  let numberForLengthCalculation = numberToCheck;
  let lengthOfTheNumber = 0;

  while (numberForLengthCalculation > 0) {

    const remainder = numberForLengthCalculation % 10;
    numberForLengthCalculation = (numberForLengthCalculation - remainder) / 10;
    lengthOfTheNumber++;
  }
  return lengthOfTheNumber;
}

function checkIsArmstrong(numberToCheck) {
  let lengthOfTheNumber = calculateLengthOfANumber(numberToCheck);
  let numberForArmstrongCalculation = numberToCheck;
  let sum = 0;

  while (numberForArmstrongCalculation > 0) {
    const remainder = numberForArmstrongCalculation % 10;
    sum = sum + (remainder ** lengthOfTheNumber);
    numberForArmstrongCalculation = (numberForArmstrongCalculation - remainder) / 10;
  }

  return (sum === numberToCheck);
}


function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, numberToCheck) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + "number To Check = " + numberToCheck + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testIsArmstong(numberToCheck, expectedResult) {
  const result = checkIsArmstrong(numberToCheck);
  const message = composeMessage(result, expectedResult, numberToCheck);
  console.log(message);
}

function main() {
  testIsArmstong(1, true);
  testIsArmstong(153, true);
  testIsArmstong(156, false);
  testIsArmstong(370, true);
  testIsArmstong(374, false);
  testIsArmstong(1634, true);
  testIsArmstong(1635, false);
}

main();
