function calculateSimpleInterest(principal, time, roi) {
  const simpleInterest = (principal * roi * time) / 100;

  return simpleInterest;
}

function composeMessage(result, expectedResult, principal, time, roi) {
  const emoji = (result === expectedResult) ? "✅" : "❌";
  const message = emoji + " principal = " + principal + " time = " + time + " rate of interest = " + roi + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testCalculateSimpleInterest(principal, time, roi, expectedResult) {
  const result = calculateSimpleInterest(principal, time, roi);
  const message = composeMessage(result, expectedResult, principal, time, roi);
  console.log(message);
}

function main() {
  testCalculateSimpleInterest(0, 1, 2, 0);
  testCalculateSimpleInterest(1000, 1, 20, 200);
  testCalculateSimpleInterest(500, 2, 10, 100);
  testCalculateSimpleInterest(400, 3, 12, 144);
}

main();
