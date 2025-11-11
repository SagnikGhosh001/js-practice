const countOfOccurence = (frequency, element) => {
  if (!frequency[element]) {
    frequency[element] = 0;
  }

  frequency[element]++;
  return frequency;
};

const frequencyTable = [1, 3, 4, 1, 2].reduce(countOfOccurence, {});

console.log(frequencyTable);
