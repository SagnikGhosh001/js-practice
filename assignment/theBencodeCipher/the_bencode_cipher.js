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

function formatEncoding(start, middle, end) {
  return `${start}${middle}${end}`;
}

function encode(data) {
  if (isNumber(data)) {
    return formatEncoding("i", data, "e");
  }

  if (isString(data)) {
    return formatEncoding(data.length, ":", data);
  }

  return formatEncoding("l", encodeForArray(data), "e");
}

function getSegmentLastIndex(data, index, char = "e") {
  while (index < data.length) {
    if (data[index] === char) {
      return index;
    }
    index++;
  }
}

function getNextIndexOfColon(data, index = 0) {
  return getSegmentLastIndex(data, index, ":") + 1;
}

function getLastIndexofString(data, index) {
  const nextIndexOfColon = getNextIndexOfColon(data, index);
  const lengthOfString = parseInt(data.slice(index, nextIndexOfColon - 1));
  const endIndex = nextIndexOfColon + lengthOfString;

  return endIndex;
}

function decodeForString(data) {
  const startIndex = getNextIndexOfColon(data);
  const endIndex = getLastIndexofString(data, 0);

  return data.slice(startIndex, endIndex);
}

function decodeForNumber(data) {
  const indexOfE = data.indexOf("e");
  const numberInStringFormat = data.slice(1, indexOfE);
  return parseInt(numberInStringFormat);
}

function calculateNextIndex(index, decodedElement) {
  const encodedElement = encode(decodedElement);
  return index + encodedElement.length;
}

function getLastIndexOfArray(data, index) {
  let newIndex = 0;

  if (data[index] === "e") return index;

  if (data[index] === "i") {
    newIndex = getSegmentLastIndex(data, index) + 1;
  }

  if (data[index] === "l") {
    newIndex = getLastIndexOfArray(data, index + 1) + 1;
  }

  if (data[index] !== "l" && data[index] !== "i") {
    newIndex = getLastIndexofString(data, index);
  }

  return getLastIndexOfArray(data, newIndex);
}

function decodeForArray(data) {
  const decodedArry = [];
  let index = 1;
  const endOfArray = getLastIndexOfArray(data, index);

  while (index < endOfArray) {
    const toDecode = data.slice(index, endOfArray);
    const decodedElement = decode(toDecode);

    decodedArry.push(decodedElement);
    index = calculateNextIndex(index, decodedElement);
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

function composeMsg(result, expected, data, purpose) {
  const emoji = getEmoji(result, expected);
  const inputSection = "Inputs : [" + data + "]";
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
  testDecode("5:h:llo", "h:llo", "colon in string");
  testDecode("0:", "", "for empty string");
  testDecode("16:special!@#$chars", "special!@#$chars", "for special char string");
  testDecode("i123e", 123, "for positive number");
  testDecode("i-42e", -42, "for negative number");
  testDecode("i0e", 0, "for zero");
  testDecode("le", [], "for empty array");
  testDecode("l0:i0elee", ["", 0, []], "for nested empty array");
  testDecode("li0e0:l4:testee", [0, "", ["test"]], "for mixed element array");
  testDecode("l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]], "for nested array");
  testDecode("l3:onel3:twol5:threei12eeee", ["one", ["two", ["three", 12]]], "for complex nested array");
  testDecode("li1ei2ei3eli34eei6ei9ee", [1, 2, 3, [34], 6, 9], "for complex nested array in middle");
  testDecode("li1ei2ei3eli34e5:hello1:eei6ei9ee", [1, 2, 3, [34, "hello", "e"], 6, 9], "for complex nested array in middle");
  testDecode("l5:hello11:hello worlde", ["hello", "hello world"], "for string with l");
  testDecode("l5:h:llo11:hello worlde", ["h:llo", "hello world"], "for string with l");
  testDecode("llllli123e3:abeeeeee", [[[[[123, "abe"]]]]], "for string with l");
  console.log();
}

function testAllEncode() {
  console.log(heading("Encode"));
  testEncode("hello", "5:hello", "for string");
  testEncode("h:llo", "5:h:llo", "colon in string");
  testEncode("", "0:", "for empty string");
  testEncode("special!@#$chars", "16:special!@#$chars", "for special char string");
  testEncode(123, "i123e", "for positive number");
  testEncode(-42, "i-42e", "for negative number");
  testEncode(0, "i0e", "for zero");
  testEncode([], "le", "for empty array");
  testEncode([0, "", ["test"]], "li0e0:l4:testee", "for mixed element array");
  testEncode(["", 0, []], "l0:i0elee", "for nested empty array");
  testEncode(["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee", "for nested array");
  testEncode(["one", ["two", ["three", 12]]], "l3:onel3:twol5:threei12eeee", "for complex nested array");
  testEncode([1, 2, 3, [34], 6, 9], "li1ei2ei3eli34eei6ei9ee", "for complex nested array in middle");
  testEncode([1, 2, 3, [34, "hello", "e"], 6, 9], "li1ei2ei3eli34e5:hello1:eei6ei9ee", "for complex nested array in middle");
}

function main() {
  testAllEncode();
  testAllDecode();
}

main();
