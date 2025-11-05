const isStringOrArray = function (value) {
  return typeof value === "string" || Array.isArray(value);
}

const isLessThan = function (firstValue, secondValue) {
  firstValue = isStringOrArray(firstValue) ? firstValue.length : firstValue;
  secondValue = isStringOrArray(secondValue) ? secondValue.length : secondValue;

  return firstValue < secondValue;
};

const isGreaterThan = function (firstValue, secondValue) {
  return !isLessThan(firstValue, secondValue);
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
    }
  }

  return sortedArray;
};

const performSorting = function (data, order) {
  const functionToChoose = order === "a" ? isGreaterThan : isLessThan;
  const sortedData = sort(data, functionToChoose);
  console.log(sortedData.join(" "));
}

const main = function (args) {
  performSorting([1, 11, 32, 2, 45], args[0]);
  performSorting(["a", "abka", "bgh"], args[0]);
  performSorting([1, "a", "abc", 2], args[0]);
};

main(Deno.args);
