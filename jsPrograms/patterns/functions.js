const starLine = (length) => "*".repeat(length);

const spaces = (length) => " ".repeat(length);

const hollowLine = (length) => {
  if (length <= 1) return "*";
  return `*${spaces(length - 2)}*`;
};

export const repeatMN = (m, n) => {
  const repeatedArray = [];
  for (let index = 0; index < m; index++) {
    repeatedArray.push(n);
  }

  return repeatedArray;
};

export const triangle = (m) => {
  const repeatedArray = [];
  for (let index = 1; index <= m; index++) {
    repeatedArray.push(index);
  }

  return repeatedArray;
};

export const hollow = (fun, dimensions) => {
  const repeatMNArray = fun(...dimensions);
  if (repeatMNArray.length <= 2) return [...repeatMNArray];

  return [repeatMNArray[0], repeatMNArray.slice(1, -1), repeatMNArray.at(-1)];
};

export const reversedTriangle = (m) => {
  const repeatedArray = [];
  for (let index = m; index >= 1; index--) {
    repeatedArray.push(index);
  }

  return repeatedArray;
};

const generateStar = (array, [filled, hollow = filled]) => {
  return array.map((ele) => {
    return Array.isArray(ele) ? ele.map(hollow).join("\n") : filled(ele);
  });
};

export const printForFilledPattern = (funtionToUse, dimensions) => {
  const repeatedArray = funtionToUse(...dimensions);
  const starArray = generateStar(repeatedArray, [starLine]);
  return starArray.join("\n");
};

export const printForHollowPattern = (funtionToUse, dimensions) => {
  const repeatedArray = hollow(funtionToUse, dimensions);
  const starArray = generateStar(repeatedArray, [starLine, hollowLine]);
  return starArray.join("\n");
};
