const countOfOccurence = (frequency, element) => {
  if (!(element in frequency)) {
    frequency[element] = 0;
  }

  frequency[element]++;
  return frequency;
};

const frequencyTable = [1, 3, 4, 1, 2].reduce(countOfOccurence, {});

console.log(frequencyTable);
