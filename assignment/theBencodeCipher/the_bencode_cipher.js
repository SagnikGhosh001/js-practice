function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number";
}

function encodeForArray(array) {
  let encodedString = "";
  for (let index = 0; index < array.length; index++) {
    encodedString += encode(array[index]);
  }

  return encodedString;
}

function encode(data) {
  if (isNumber(data)) {
    return "i" + data + "e";
  }

  if (isString(data)) {
    return data.length + ":" + data;
  }

  return "l" + encodeForArray(data) + "e";
}

function decodeForString(data) {
  const colonIndex = data.indexOf(":");
  const lengthOfString = parseInt(data.slice(0, colonIndex));
  const startIndex = colonIndex + 1;
  const endIndex = startIndex + lengthOfString;

  return data.slice(startIndex, endIndex);
}

function decodeForNumber(data) {
  const indexOfE = data.indexOf("e");
  const numberInStringFormat = data.slice(1, indexOfE);
  return parseInt(numberInStringFormat);
}

function lengthOfNumber(number) {
  return number === 0 ? 1 : Math.ceil(Math.log10(number + 1));
}

function findNextIndex(index, decodedElement, toDecode) {
  if (isString(decodedElement)) {
    return index + lengthOfNumber(decodedElement.length) + decodedElement.length + 1;
  }

  if (isNumber(decodedElement)) {
    return index + lengthOfNumber(decodedElement) + 2;
  }


  const indexOfLastE = toDecode.lastIndexOf("e");
  return index + findLastE + 1;
}

function decodeForArray(data) {
  const decodedArry = [];
  let index = 1;
  const endOfLoop = data.lastIndexOf("e");

  while (index < endOfLoop) {
    const toDecode = data.slice(index, data.length - 1);
    const decodedElement = decode(toDecode);

    decodedArry.push(decodedElement);
    index = findNextIndex(index, decodedElement, toDecode);
  }

  return decodedArry;
}

function decode(data) {
  if (data.startsWith("i")) {
    return decodeForNumber(data);
  }

  if (data.startsWith("l")) {
    return decodeForArray(data);
  }

  return decodeForString(data);
}

function areEquals(firstValue, secondValue) {
  if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
    return areDeepEqual(firstValue, secondValue);
  }

  return firstValue === secondValue;
}

function areDeepEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEquals(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function getEmoji(result, expected) {
  return areEquals(result, expected) ? "✅" : "❌";
}

function composeMsg(result, expected, date, purpose) {
  const emoji = getEmoji(result, expected);
  const inputSection = "Inputs : [" + date + "]";
  const resultSection = "result = " + result;
  const expectedSection = "expected result = " + expected;
  let message = emoji + purpose;
  if (!areEquals(result, expected)) {
    message += '\n\n' + inputSection;
    message += '\n' + resultSection;
    message += '\n' + expectedSection;
    message += "\n__________\n";
  }
  return message;
}

function testEncode(data, expected, purpose) {
  const result = encode(data);
  const msg = composeMsg(result, expected, data, purpose);
  console.log(msg);
}

function testDecode(data, expected, purpose) {
  const result = decode(data);
  const msg = composeMsg(result, expected, data, purpose);
  console.log(msg);
}

function heading(string) {
  return string + "\n" + "-".repeat(string.length);
}

function testAllDecode() {
  console.log(heading("Decode"));
  testDecode("5:hello", "hello", "for string");
  testDecode("0:", "", "for empty string");
  testDecode("16:special!@#$chars", "special!@#$chars", "for special char string");
  testDecode("i123e", 123, "for positive number");
  testDecode("i-42e", -42, "for negative number");
  testDecode("i0e", 0, "for zero");
  testDecode("le", [], "for empty array");
  testDecode("l0:i0elee", ["", 0, []], "for nested empty array");
  testDecode("li0e0:l4:testee", [0, "", ["test"]], "for mixed element array");
  testDecode("l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]], "for nested array");
  console.log();
}

function testAllEncode() {
  console.log(heading("Encode"));
  testEncode("hello", "5:hello", "for string");
  testEncode("", "0:", "for empty string");
  testEncode("special!@#$chars", "16:special!@#$chars", "for special char string");
  testEncode(123, "i123e", "for positive number");
  testEncode(-42, "i-42e", "for negative number");
  testEncode(0, "i0e", "for zero");
  testEncode([], "le", "for empty array");
  testEncode([0, "", ["test"]], "li0e0:l4:testee", "for mixed element array");
  testEncode(["", 0, []], "l0:i0elee", "for nested empty array");
  testEncode(["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee", "for nested array");
}

function main() {
  testAllEncode();
  testAllDecode();
}

main();
