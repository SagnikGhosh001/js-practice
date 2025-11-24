const array = [1, 2, 3]; // [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

const fn = (array, solution = []) => {
  if (array.length === 0) return solution;

  for (let i = 0; i < array.length; i++) {
    const elements = [];
    for (let j = 0; j <= i; j++) {
      elements.push(array[j]);
    }
    solution.push(elements);
  }

  return fn(array.slice(1), solution);
};

console.log(fn(array));
