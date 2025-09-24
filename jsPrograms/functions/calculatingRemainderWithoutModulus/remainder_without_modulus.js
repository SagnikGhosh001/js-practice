function calculateRemainder(dividend, divisor) {
  let count = -1;
  for (let term = 0; term <= dividend; term = term + divisor) {
    count++;
  }
  return dividend - (count * divisor);
}

function testAll(dividend, divisor, expectedOutput) {
  const result = calculateRemainder(dividend,divisor);
  const emoji = (result === expectedOutput) ? "✅" : "❌";
  const message = emoji + "dividend = " + dividend + " divisor = " + divisor + " result = " + result + " expected Output = " + expectedOutput;
  console.log(message);
  
}

function main () {
  testAll(5,2,1);
  testAll(11,3,2);
  testAll(16,2,0);
  testAll(17,2,1);
  testAll(27,5,2);
}

main();
