const starLine = (length) => "*".repeat(length);
const spaces = (length) => " ".repeat(length);
const hollowLine = (length) => `*${spaces(length - 2)}*`;

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

export const hollow = (fun, m, n) => {
  const repeatMNArray = fun(m, n);
  if (repeatMNArray.length <= 2) return repeatMNArray.slice();
  if (repeatMNArray.length > 2) {
    return [repeatMNArray[0], repeatMNArray.slice(1, -1), repeatMNArray.at(-1)];
  }
};

export const reversedTriangle = (m) => {
  const repeatedArray = [];
  for (let index = m; index >= 1; index--) {
    repeatedArray.push(index);
  }

  return repeatedArray;
};

const generateStar = (array, style) => {
  return array.map((ele) => {
    return Array.isArray(ele) ? ele.map(style[1]).join("\n") : style[0](ele);
  });
};

export const printForFilledPattern = (funtionToUse, m, n) => {
  const repeatedArray = funtionToUse(m, n);
  const starArray = generateStar(repeatedArray, [starLine]);
  return starArray.join("\n");
};

export const printForHollowPattern = (funtionToUse, m, n) => {
  const repeatedArray = hollow(funtionToUse, m, n);
  const starArray = generateStar(repeatedArray, [starLine, hollowLine]);
  return starArray.join("\n");
};
