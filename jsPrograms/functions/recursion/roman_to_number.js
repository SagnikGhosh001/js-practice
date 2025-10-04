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

function convertRomanToNumber(string, index) {
  if (index < 0) {
    return 0;
  }
  const romanValue = romanDigitToNumber(string[index]);

  return romanValue - convertRomanToNumber(string, index - 1);
}

function romanToNumber(string) {
  const upperCase = string.toUpperCase();
  return convertRomanToNumber(upperCase, upperCase.length - 1);
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
  testRomanToNumber("R", -1, "for wrong digit");
}

main();
