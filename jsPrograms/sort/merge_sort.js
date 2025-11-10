const middle = (number) => Math.floor(number / 2);

const sort = (array1, array2) => {
  const sortedArray = [];
  let j = 0;
  let i = 0;

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

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const middleIndex = middle(array.length);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return sort(sortedLeft, sortedRight);
};

console.log(mergeSort([2, 5, 3, 1, 6, 5]));
