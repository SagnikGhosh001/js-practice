function decimalToBinary(decimalValue) {
  let binary = "";
  
  if (decimalValue === 0) {
    return "0";
  }

  while (decimalValue > 0) {
    const remainder = decimalValue % 2;
    decimalValue = (decimalValue - remainder) / 2;
    binary = remainder + binary;
  }
  return binary;
}

function getEmoji(result, expectedResult) {
  return result === expectedResult ? "✅" : "❌";
}

function composeMessage(result, expectedResult, decimalValue) {
  const emoji = getEmoji(result,expectedResult);
  const message = emoji + " Decimal value = " + decimalValue + " result = " + result + " expected result = " + expectedResult;
  return message;
}

function testDecimalToBinary(decimalValue, expectedResult) {
  const result = decimalToBinary(decimalValue);
  const message = composeMessage(result, expectedResult, decimalValue);
  console.log(message);
}

function main() {
  testDecimalToBinary(0,"0");
  testDecimalToBinary(1,"1");
  testDecimalToBinary(6,"110");
  testDecimalToBinary(8,"1000");
  testDecimalToBinary(10,"1010");
}

main();
