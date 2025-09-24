function smallest(a, b) {
  return a < b ? a : b;
}

function greatest(a, b) {
  return a > b ? a : b;
}

function secondLargestAmongThreeNumbers(a, b, c) {
  const isBSmallerThanBothAndC = b < a && b < c;

  return isBSmallerThanBothAndC ? smallest(a, c) : greatest(smallest(a, b), smallest(b, c));
}

const result = secondLargestAmongThreeNumbers(1, 1, 1);
console.log(result);
