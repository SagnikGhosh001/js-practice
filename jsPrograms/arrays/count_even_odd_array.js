function countEvenOdd(array, index, evenCount, oddCount) {
  if (index === array.length) {
    return [evenCount, oddCount];
  }

  evenCount += array[index] % 2 === 0 ? 1 : 0;
  oddCount += array[index] % 2 != 0 ? 1 : 0;

  return countEvenOdd(array, index + 1, evenCount, oddCount);
}

function evenOddArray(array) {
  const countOfEvenOdd = countEvenOdd(array, 0, 0, 0);
  return countOfEvenOdd;
}

function isEqualValue(a, b) {
  return a === b;
}

function areArrayEquals(array1, array2, index) {
  if (index === array1.length) {
    return true;
  }

  const isLengthOfBothArrayNotEual = array1.length !== array2.length;
  if (isLengthOfBothArrayNotEual || !isEqualValue(array1[index], array2[index])) {
    return false;
  }

  return areArrayEquals(array1, array2, index + 1);
}

function getEmoji(result, expected) {

  return areArrayEquals(result, expected, 0) ? "✅" : "❌";
}

function composeMsg(result, expected, array, purpose) {
  const emoji = getEmoji(result, expected);
  const inputSection = `Inputs :  ${array}`;
  const resultSection = "result = " + result;
  const expectedSection = "expected result = " + expected;
  let message = emoji + purpose;
  if (!areArrayEquals(result, expected,0)) {
    message += '\n\n' + inputSection;
    message += '\n' + resultSection;
    message += '\n' + expectedSection;
    message += "\n__________\n";
  }
  return message;
}

function testEvenOddArray(array, expected, purpose) {
  const result = evenOddArray(array);
  const msg = composeMsg(result, expected, array, purpose);
  console.log(msg);
}

function main() {
  testEvenOddArray([1, 2, 3], [1, 2], "for random numbers");
  testEvenOddArray([0, 2, 4], [3, 0], "for all even numbers");
}

main();
