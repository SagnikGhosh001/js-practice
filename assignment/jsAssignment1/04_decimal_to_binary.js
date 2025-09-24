function decimalToBinary(decimalValue) {
  let binary = "";
  
  if (decimalValue === 0) {
    return "0";
  }

  while (decimalValue > 0) {
    const remainder = decimalValue % 2;
    decimalValue = (decimalValue - remainder) / 2;
    binary = binary + remainder;
  }
  return binary;
}

function composeMessage(result, expectedResult, decimalValue) {
  const emoji = (result === expectedResult) ? "✅" : "❌";
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
  testDecimalToBinary(6,"011");
  testDecimalToBinary(8,"0001");
  testDecimalToBinary(10,"0101");
}

main();
