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

console.log(insertionSort([1, 3, 5, 1, 2]));
