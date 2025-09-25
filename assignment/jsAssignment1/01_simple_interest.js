function calculateSimpleInterest(principal, time, rate) {
  const simpleInterest = (principal * rate * time) / 100;
  return simpleInterest;
}

function getEmoji(result, expectedResult) {
  return (result === expectedResult) ? "✅" : "❌";
}

function composeMessage(result, expectedResult, principal, time, rate) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + " principal = " + principal + " time = " + time + " rate of interest = " + rate + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testCalculateSimpleInterest(principal, time, rate, expectedResult) {
  const result = calculateSimpleInterest(principal, time, rate);
  const message = composeMessage(result, expectedResult, principal, time, rate);
  console.log(message);
}

function main() {
  testCalculateSimpleInterest(0, 1, 2, 0);
  testCalculateSimpleInterest(1000, 1, 20, 200);
  testCalculateSimpleInterest(500, 2, 10, 100);
  testCalculateSimpleInterest(400, 3, 12, 144);
}

main();
