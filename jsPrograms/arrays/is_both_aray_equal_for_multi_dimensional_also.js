function isArray(value) {
  return typeof value === 'object';
}

function isEqualValue(a, b) {
  return a === b;
}

function areArrayEquals(array1, array2, index) {
  if (index === array1.length) {
    return true;
  }

  const isLengthOfArraysEqual = array1.length === array2.length;
  if (!isLengthOfArraysEqual || !isEqualValue(array1[index], array2[index])) {
    return false;
  }

  if (isArray(array1[index])) {
    return areArrayEquals(array1[index], array2[index], 0)
  }

  return areArrayEquals(array1, array2, index + 1);
}
