function calculateCompoundInterest(principal, time, rate) {
  let newPrincipal = principal;

  for (let currentTime = 1; currentTime <= time; currentTime++) {
    const simpleInterest = (newPrincipal * rate) / 100;
    newPrincipal = newPrincipal + simpleInterest;
  }

  return newPrincipal - principal;
}

function getEmoji(result, expectedResult) {
  return isApproximatelyEqual(result, expectedResult) ? "✅" : "❌";
}

function isApproximatelyEqual(result, expectedResult) {
  const tolerance = (expectedResult - result);
  return tolerance <= 0.01 && tolerance >= -0.01;
}

function composeMessage(result, expectedResult, principal, time, rate) {
  const emoji = getEmoji(result, expectedResult);
  const message = emoji + " principal = " + principal + " time = " + time + " rate of interest = " + rate + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testCalculateCompoundInterest(principal, time, rate, expectedResult) {
  const result = calculateCompoundInterest(principal, time, rate);
  const message = composeMessage(result, expectedResult, principal, time, rate);
  console.log(message);
}

function main() {
  testCalculateCompoundInterest(1500, 2, 3, 91.34);
  testCalculateCompoundInterest(1000, 2, 20, 440);
  testCalculateCompoundInterest(2000, 4, 12, 1147.03);
  testCalculateCompoundInterest(10000, 5, 15, 10113.57);
  testCalculateCompoundInterest(15000, 7, 12, 18160.22);
}

main();
