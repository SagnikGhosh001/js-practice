function romanDigitToNumber(char) {
  switch (char) {
    case "I": return 1;
    case "V": return 5;
    case "X": return 10;
    case "L": return 50;
    case "C": return 100;
    case "D": return 500;
    case "M": return 1000;
    default: return -1;
  }
}

function getEmoji(result, expected) {
  return result === expected ? "✅" : "❌";
}

function convertRomanToNumber(string, index, number) {
  if (index < 0) {
    return number;
  }

  const currentValue = romanDigitToNumber(string[index]);
  const nextValue = index - 1 < 0 ? 0 : romanDigitToNumber(string[index - 1]);
  
  if (currentValue === -1 || nextValue === -1) {
    return -1;
  }
  
  number = currentValue === nextValue ? currentValue + nextValue : number;
  number += currentValue > nextValue ? currentValue - nextValue : 0;
  number += currentValue < nextValue ? currentValue + nextValue : 0;

  return convertRomanToNumber(string, index - 2, number);
}

function romanToNumber(string) {
  const upperCase = string.toUpperCase();

  if (upperCase.length === 1) {
    return romanDigitToNumber(string);
  }

  return convertRomanToNumber(upperCase, upperCase.length - 1, 0);
}

function composeMsg(result, expected, string, purpose) {
  const emoji = getEmoji(result, expected);
  const inputSection = "Inputs : [" + string + "]";
  const resultSection = "result = " + result;
  const expectedSection = "expected result = " + expected;
  let message = emoji + purpose;
  if (result !== expected) {
    message += '\n\n' + inputSection;
    message += '\n' + resultSection;
    message += '\n' + expectedSection;
    message += "\n__________\n";
  }
  return message;
}

function testRomanToNumber(string, expected, purpose) {
  const result = romanToNumber(string);
  const msg = composeMsg(result, expected, string, purpose);
  console.log(msg);
}

function main() {
  testRomanToNumber("I", 1, "for single digit");
  testRomanToNumber("IV", 4, "for Subtractive Notation");
  testRomanToNumber("IX", 9, "for Subtractive Notation");
  testRomanToNumber("II", 2, "for Repeat Value");
  testRomanToNumber("XX", 20, "for Repeat Value");
  testRomanToNumber("VI", 6, "for Mixed Value");
  testRomanToNumber("XIV", 14, "for Mixed Value");
  testRomanToNumber("LXXX", 80, "for Mixed Value");
  testRomanToNumber("CXL", 140, "for Mixed Value");
  testRomanToNumber("CDXLIV", 444, "for Mixed Value");
  testRomanToNumber("R", -1, "for wrong digit");
  testRomanToNumber("jDXIIV", -1, "for wrong digit in more than 1 string");
  testRomanToNumber("IR", -1, "for wrong digit in more than 1 string");
}

main();
