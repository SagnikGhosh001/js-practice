function sort(data) {
  const sortedArray = data.slice();

  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] > sortedArray[j]) {
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }

  return sortedArray;
}

function displayArray(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function main() {
  const data = [2, 45, 1];
  const sortedArray = sort(data);
  displayArray(sortedArray);
}

main();
