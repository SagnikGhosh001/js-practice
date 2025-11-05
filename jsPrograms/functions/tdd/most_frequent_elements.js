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

function calculateFrequeny(sum, value) {
  return (sum / value) + 1;
}

function findAllFrequency(data) {
  const sortedData = sort(data);
  const frequencyOfElements = [];
  let sum = 0;
  let highestFrequency = 0;

  for (let index = 0; index < sortedData.length; index++) {
    if (sortedData[index] === sortedData[index + 1]) {
      sum += sortedData[index];
    } else {
      const frequency = calculateFrequeny(sum, sortedData[index]);
      highestFrequency = frequency > highestFrequency ? frequency : highestFrequency;
      frequencyOfElements.push([sortedData[index], frequency]);
      sum = 0;
    }
  }

  return [frequencyOfElements, highestFrequency];
}

function findMostFrequent(data) {
  const frequencyOfElements = findAllFrequency(data)[0];
  const highestFrequency = findAllFrequency(data)[1];
  const mostFrequentElements = [];

  for (let index = 0; index < frequencyOfElements.length; index++) {
    const currentElement = frequencyOfElements[index];
    if (currentElement[1] === highestFrequency) {
      mostFrequentElements.push(currentElement[0]);
    }
  }

  return mostFrequentElements;
}

function areEquals(firstValue, secondValue) {
  if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
    return areDeepEqual(firstValue, secondValue);
  }
  return firstValue === secondValue;
}

function areDeepEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEquals(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
}

function getEmoji(result, expected) {
  return areDeepEqual(result, expected) ? "✅" : "❌";
}

function composeMsg(result, expected, data, purpose) {
  const emoji = getEmoji(result, expected);
  const inputSection = `Inputs :  ${data}`;
  const resultSection = "result = " + result;
  const expectedSection = "expected result = " + expected;
  let message = emoji + purpose;
  if (!areDeepEqual(result, expected)) {
    message += '\n\n' + inputSection;
    message += '\n' + resultSection;
    message += '\n' + expectedSection;
    message += "\n__________\n";
  }
  return message;
}

function testFindMostFrequent(data, expected, purpose) {
  const result = findMostFrequent(data);
  const msg = composeMsg(result, expected, data, purpose);
  console.log(msg);
}

function main() {
  testFindMostFrequent([1, 2, 3], [1, 2, 3], "all element with one frequency");
  testFindMostFrequent([1, 2, 1, 2, 3, 3], [1, 2, 3], "all element with two frequency");
  testFindMostFrequent([1, 4, 2, 2, 1, 2, 3, 3], [2], "highest frequency");
}

main();
