import * as allFns from "./functions.js";

const testForFilledRectngle = {
  name: "Filled Rectangle",
  ref: allFns.printForFilledPattern,
  argsFunction: allFns.repeatMN,
  cases: [
    {
      desc: " 1 X 1",
      input: [1, 1],
      expectedOutput: "*",
    },
    {
      desc: "for 1 X 2",
      input: [1, 2],
      expectedOutput: "**",
    },
    {
      desc: "for 2 X 2",
      input: [2, 2],
      expectedOutput: "**\n**",
    },
    {
      desc: "for 3 X 3",
      input: [3, 3],
      expectedOutput: "***\n***\n***",
    },
  ],
};

const testForHollowRectagle = {
  name: "Hollow Rectangle",
  ref: allFns.printForHollowPattern,
  argsFunction: allFns.repeatMN,
  cases: [
    {
      desc: "for 1 x 2",
      input: [1, 2],
      expectedOutput: "**",
    },
    {
      desc: "for 2 x 2",
      input: [2, 2],
      expectedOutput: "**\n**",
    },
    {
      desc: "for 3 x 2",
      input: [3, 2],
      expectedOutput: "**\n**\n**",
    },
    {
      desc: "for 3 x 3",
      input: [3, 3],
      expectedOutput: "***\n* *\n***",
    },
  ],
};

const testForTriangle = {
  name: "Triangle",
  ref: allFns.printForFilledPattern,
  argsFunction: allFns.triangle,
  cases: [
    {
      desc: "for 1",
      input: [1],
      expectedOutput: "*",
    },
    {
      desc: "for 2 x 2",
      input: [2],
      expectedOutput: "*\n**",
    },
    {
      desc: "for 3",
      input: [3],
      expectedOutput: "*\n**\n***",
    },
    {
      desc: "for 4",
      input: [4],
      expectedOutput: "*\n**\n***\n****",
    },
  ],
};

const testForHollowTriangle = {
  name: "Triangle",
  ref: allFns.printForHollowPattern,
  argsFunction: allFns.triangle,
  cases: [
    {
      desc: "for 1",
      input: [1],
      expectedOutput: "*",
    },
    {
      desc: "for 2 x 2",
      input: [2],
      expectedOutput: "*\n**",
    },
    {
      desc: "for 3",
      input: [3],
      expectedOutput: "*\n**\n***",
    },
    {
      desc: "for 4",
      input: [4],
      expectedOutput: "*\n**\n* *\n****",
    },
  ],
};

const testForReversedTriangle = {
  name: "Reversed Triangle",
  ref: allFns.printForFilledPattern,
  argsFunction: allFns.reversedTriangle,
  cases: [
    {
      desc: "for 1",
      input: [1],
      expectedOutput: "*",
    },
    {
      desc: "for 2 x 2",
      input: [2],
      expectedOutput: "**\n*",
    },
    {
      desc: "for 3",
      input: [3],
      expectedOutput: "***\n**\n*",
    },
    {
      desc: "for 4",
      input: [4],
      expectedOutput: "****\n***\n**\n*",
    },
  ],
};

const testForHollowReversedTriangle = {
  name: "Reversed Triangle",
  ref: allFns.printForHollowPattern,
  argsFunction: allFns.reversedTriangle,
  cases: [
    {
      desc: "for 1",
      input: [1],
      expectedOutput: "*",
    },
    {
      desc: "for 2 x 2",
      input: [2],
      expectedOutput: "**\n*",
    },
    {
      desc: "for 3",
      input: [3],
      expectedOutput: "***\n**\n*",
    },
    {
      desc: "for 4",
      input: [4],
      expectedOutput: "****\n* *\n**\n*",
    },
  ],
};

const testCases = [
  testForFilledRectngle,
  testForHollowRectagle,
  testForTriangle,
  testForHollowTriangle,
  testForHollowReversedTriangle,
  testForReversedTriangle,
];

const formatData = (input, expectedOutput, output) => {
  console.log(`
  INPUT : ${input},
  EXPECTED OUTPUT : ${expectedOutput}
  OUTPUT : ${output}
  `);
};

const formatHeading = (text) => {
  const underline = "-".repeat(text.length);
  console.log(`\n${text}\n${underline}`);
};

const isEquals = (result, expectedOutput) => result === expectedOutput;

const functionToTest = (func, argsFunction, element) => {
  const result = func(argsFunction, element.input);
  const symbol = isEquals(result, element.expectedOutput) ? "✅" : "❌";
  console.log(`${symbol} ${element.desc}`);

  if (!isEquals(result, element.expectedOutput)) {
    formatData(element.input, element.expectedOutput, result);
  }
};

const sendDataToTest = (testData) => {
  const { cases } = testData;

  formatHeading(testData.name);
  for (const element of cases) {
    functionToTest(testData.ref, testData.argsFunction, element);
  }
};

const main = () => {
  for (const element of testCases) {
    sendDataToTest(element);
  }
};

main();
