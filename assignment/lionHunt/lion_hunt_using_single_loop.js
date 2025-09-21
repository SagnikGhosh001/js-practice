const testCase1 = " LZ";
const testCase2 = " L Z";
const testCase3 = "L ZL";
const testCase4 = " L     Z";
const testCase5 = "L  ZL Z";
const testCase6 = " L     L";
const testCase7 = "Z   Z   Z";
const testCase8 = "Z   L   L";
const testCase9 = "Z   Z   L";
const testCase10 = " ";

const testCaseToUse = testCase3;
let minimumDistance = Infinity;
let characterToCheck = testCaseToUse[0];
let currentDistance = -1;

for (let currentTerm = 1; currentTerm < testCaseToUse.length; currentTerm++) {
  currentDistance++;

  if(characterToCheck === " " || characterToCheck === testCaseToUse[currentTerm]) {    
    characterToCheck = testCaseToUse[currentTerm];
    currentDistance = -1;
  }

  if (characterToCheck !== testCaseToUse[currentTerm] && testCaseToUse[currentTerm] !== " ") {
    minimumDistance = (currentDistance < minimumDistance) ? currentDistance : minimumDistance;
    characterToCheck = testCaseToUse[currentTerm];
    currentDistance = -1;        
  }
}

minimumDistance = (minimumDistance === Infinity) ? -1 : minimumDistance;

console.log("Input: ", testCaseToUse, "Output: ", minimumDistance);
