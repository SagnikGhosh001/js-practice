const BLOCK = "🟦";
const CURRENTBLOCK = "🟥";

const delay = function (time) {
  for (let i = 0; i <= time * 2000000; i++);
};

const isStringOrArray = function (value) {
  return typeof value === "string" || Array.isArray(value);
};

const isLessThan = function (firstValue, secondValue) {
  firstValue = isStringOrArray(firstValue) ? firstValue.length : firstValue;
  secondValue = isStringOrArray(secondValue) ? secondValue.length : secondValue;

  return firstValue < secondValue;
};

const isGreaterThan = function (firstValue, secondValue) {
  return !isLessThan(firstValue, secondValue);
};

const createBlockForElements = function (element, index, curerntElement) {
  const size = typeof element === "string" ? element.length : element;
  const blockToChoose = index === curerntElement ? CURRENTBLOCK : BLOCK;
  const repeatSize = Math.ceil(size / 10);
  return blockToChoose.repeat(repeatSize);
};

const pad = function (element, length) {
  const string = element.toString();
  return string.padEnd(length);
};

const createArrayBlock = function (data, currentElement) {
  const blockArray = [];
  for (let index = 0; index < data.length; index++) {
    const paddedElement = pad(data[index], 3);
    const elementToPush = paddedElement + createBlockForElements(data[index], index, currentElement);
    blockArray.push(elementToPush);
  }

  return blockArray;
};

const displayVisualizer = function (data, curerntElement = "") {
  const blockData = createArrayBlock(data, curerntElement).join("\n");
  console.log(blockData);
};

const sort = function (data, comparisonFunction) {
  const sortedArray = data.slice();

  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (comparisonFunction(sortedArray[i], sortedArray[j])) {
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
      console.clear();
      displayVisualizer(sortedArray, i);
      delay(500);
    }
  }
  console.clear();
  displayVisualizer(sortedArray);
};

const performSorting = function (data, order) {
  const functionToChoose = order === "a" ? isGreaterThan : isLessThan;
  sort(data, functionToChoose);
}

const main = function (args) {
  // performSorting([1, 11, 32, 2, 45], args[0]);
  performSorting([20, 81, 62, 25, 45], args[0]);
  // performSorting(["ahdsuifjf", "abshdufjhsakjdgka", "bgjshduih"], args[0]);
  // performSorting([1, "a", "abc", 2], args[0]);
};

main(Deno.args);
