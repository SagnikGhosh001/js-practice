const MIN_RUN_SIZE = 5;

const mergeSort = (array1, array2) => {
  const sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      sortedArray.push(array1[i]);
      i++;
    } else {
      sortedArray.push(array2[j]);
      j++;
    }
  }

  return sortedArray.concat(array1.slice(i), array2.slice(j));
};

const insertionSort = (array) => {
  const sortedArray = array.slice();

  for (let i = 1; i < sortedArray.length; i++) {
    const currentElement = sortedArray[i];
    let j = i - 1;
    while (sortedArray[j] > currentElement && j >= 0) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }
    sortedArray[j + 1] = currentElement;
  }

  return sortedArray;
};

//With Recursion
const timSort = (inputArray) => {
  if (inputArray.length <= MIN_RUN_SIZE) return insertionSort(inputArray);

  const leftRun = inputArray.slice(0, MIN_RUN_SIZE);
  const remainingRun = inputArray.slice(MIN_RUN_SIZE);

  const sortedLeftRun = insertionSort(leftRun);
  const sortedRemainingRun = timSort(remainingRun);

  return mergeSort(sortedLeftRun, sortedRemainingRun);
};

//with loop
// const timSort = (array) => {
//   const runs = [];
//   for (let index = 0; index < array.length; index += MIN_RUN_SIZE) {
//     const run = array.slice(index, index + MIN_RUN_SIZE);
//     runs.push(insertionSort(run));
//   }

//   let sortedArray = runs[0];
//   for (let index = 1; index < runs.length; index++) {
//     sortedArray = mergeSort(sortedArray, runs[index]);
//   }

//   return sortedArray;
// };

console.log(timSort([1, 2, 4, 5]));
console.log(timSort([1, 5, 4]));
console.log(timSort([1, 22, 4, 3, 7, 14, 5]));
console.log(timSort([1, 22, 14, 32, 171, 141, 5]));
