import * as allFns from "./functions.js";

const testForFn1 = [
  ["test fn1", allFns.fnOne],
  [
    {
      desc: "for zero",
      input: [0],
      output: "0",
    },
    {
      desc: "for One",
      input: [1],
      output: "1",
    },
  ],
];

const testForFn2 = [
  ["test fn2", allFns.fnTwo],
  [
    {
      desc: "for zero",
      input: [0, 0],
      output: "0,0",
    },
    {
      desc: "for One",
      input: [1, 1],
      output: "1,1",
    },
  ],
];

const testForFn3 = [
  ["test fn3", allFns.fnThree],
  [
    {
      desc: "for zero",
      input: [0, 0, 0],
      output: "0,0,0",
    },
    {
      desc: "for One",
      input: [1, 1, 1],
      output: "1,1,1",
    },
  ],
];

const testCases = [testForFn1, testForFn2, testForFn3];

const formatData = (input, expectedOutput, output) => {
  console.log(`
  INPUT : ${input},
  EXPECTED OUTPUT : ${expectedOutput}
  OUTPUT : ${output}
  `);
};

const formatHeading = (text) => {
  const underline = "-".repeat(text.length);
  console.log(`${text}\n${underline}`);
};

const isEquals = (result, expectedOutput) => result === expectedOutput;

const functionToTest = (func, element) => {
  const result = func(...element.input);
  const symbol = isEquals(result, element.output) ? "✅" : "❌";
  console.log(`${symbol} ${element.desc}`);

  if (!isEquals(result, element.output)) {
    formatData(element.input, element.output, result);
  }
};

const sendDataToTest = (testData) => {
  const [metaData, testCases] = testData;

  formatHeading(metaData[0]);
  for (const element of testCases) {
    functionToTest(metaData[1], element);
  }
};

const main = () => {
  for (const element of testCases) {
    sendDataToTest(element);
  }
};

main();
