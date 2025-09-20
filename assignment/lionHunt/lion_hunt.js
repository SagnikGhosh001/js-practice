const testCase1 = " LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";
const testCase4 = " L     Z";
const testCase5 = "L  ZL Z";
const testCase6 = " L     L";
const testCase7 = "Z   Z   Z";
const testCase8 = "Z   L   L";
const testCase9 = "Z   Z   L";

const testCaseToUse = testCase6;

const lengthOfTestCase = testCaseToUse.length;
let minimumDistance = Infinity;

for (let currentTerm = 0; currentTerm < lengthOfTestCase; currentTerm++) {
  let isDifferentCharacterFound = false;

  let currentDistance = -1;
  let nextTerm = currentTerm + 1;

  while (nextTerm < lengthOfTestCase && !isDifferentCharacterFound && testCaseToUse[currentTerm] !== " ") {
    currentDistance++;

    if (testCaseToUse[nextTerm] !== testCaseToUse[currentTerm] && testCaseToUse[nextTerm] !== " ") {
      isDifferentCharacterFound = true;
      minimumDistance = (currentDistance <= minimumDistance) ? currentDistance : minimumDistance;
    }
    nextTerm++;
  }

}

minimumDistance = (minimumDistance === Infinity) ? -1 : minimumDistance;

console.log("Input: ", testCaseToUse, "Output: ", minimumDistance);
