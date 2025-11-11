import * as allFns from "./functions.js";

const testForFn1 = {
  name: "my fn name 1",
  ref: allFns.fnOne,
  cases: [
    {
      desc: "for 0",
      input: [0],
      expectedOutput: "0",
    },
    {
      desc: "for 1",
      input: [1],
      expectedOutput: "1",
    },
  ],
};

const testForFn2 = {
  name: "my fn name 2",
  ref: allFns.fnTwo,
  cases: [
    {
      desc: "for 0",
      input: [0, 0],
      expectedOutput: "0,0",
    },
    {
      desc: "for 1",
      input: [1, 1],
      expectedOutput: "1,1",
    },
  ],
};

const testForFn3 = {
  name: "my fn name 3",
  ref: allFns.fnThree,
  cases: [
    {
      desc: "for 0",
      input: [0, 0, 0],
      expectedOutput: "0,0,0",
    },
    {
      desc: "for 1",
      input: [1, 1, 1],
      expectedOutput: "1,1,1",
    },
  ],
};

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
    functionToTest(testData.ref, element);
  }
};

const main = () => {
  for (const element of testCases) {
    sendDataToTest(element);
  }
};

main();
