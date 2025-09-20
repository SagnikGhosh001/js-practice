const testCase1 = " LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";
const testCase4 = " L     Z";
const testCase5 = "L  ZL Z";
const testCase6 = " L     L";
const testCase7 = "Z   Z   Z";
const testCase8 = "Z   L   L";
const testCase9 = "Z   Z   L";

const testCaseToUse = testCase8;

const lengthOfTestCase = testCaseToUse.length;
let minimumDistance = 101;
let currentDistance = 0;

for (let currentTerm = 0; currentTerm < lengthOfTestCase; currentTerm++) {
  let isDifferentCharacterFound = false;

  currentDistance = -1;
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

minimumDistance = (minimumDistance === 101) ? -1 : minimumDistance;

console.log("Input: ", testCaseToUse, "Output: ", minimumDistance);
