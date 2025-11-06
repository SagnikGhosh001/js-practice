const BLOCK = "⬜️";
const COMPAREBLOCK = "🟦";
const CURRENTBLOCK = "🟥";
const SORTEDBLOCK = "🟩";

let DELAY = 500;

const delay = function (time) {
  for (let i = 0; i <= time * 3000000; i++);
};

const isLessThan = function (firstValue, secondValue) {
  return firstValue < secondValue;
};

const isGreaterThan = function (firstValue, secondValue) {
  return !isLessThan(firstValue, secondValue);
};

const getBlock = function (index, i, j) {
  if (index === i) {
    return CURRENTBLOCK;
  }

  if (index === j) {
    return COMPAREBLOCK;
  }

  return index < i ? SORTEDBLOCK : BLOCK;
}

const createBlockForElements = function (element, index, i, j) {
  const size = typeof element === "string" ? element.length : element;
  const blockToChoose = getBlock(index, i, j);
  const repeatSize = Math.ceil(size / 10);
  return blockToChoose.repeat(repeatSize);
};

const pad = function (element, length) {
  const string = element.toString();
  return string.padEnd(length);
};

const createArrayBlock = function (data, i, j) {
  const blockArray = [];
  for (let index = 0; index < data.length; index++) {
    const paddedElement = pad(data[index], 3);
    const elementToPush = paddedElement + createBlockForElements(data[index], index, i, j);
    blockArray.push(elementToPush);
  }

  return blockArray;
};

const displayVisualizer = function (data, i, j) {
  const blockData = createArrayBlock(data, i, j).join("\n");
  console.log(blockData);
};

const sort = function (data, comparisonFunction) {
  const sortedArray = data.slice();

  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      console.clear();
      displayVisualizer(sortedArray, i, j);
      delay(DELAY);
      if (comparisonFunction(sortedArray[i], sortedArray[j])) {
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }
  console.clear();
  displayVisualizer(sortedArray, sortedArray.length, sortedArray.length);
};

const performSorting = function (data, order) {
  const functionToChoose = order === "a" ? isGreaterThan : isLessThan;
  sort(data, functionToChoose);
}

const main = function (args) {
  DELAY = +args[1] || 500;
  performSorting([70, 100, 10, 40, 30, 140, 20], args[0]);
};

main(Deno.args);
