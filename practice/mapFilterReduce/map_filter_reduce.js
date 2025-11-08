const QUESTION1 = ["### **1. Festival Ribbon Count**", "A craft booth cuts ribbons of different colors throughout the day:", ["red", "blue", "red", "green", "red", "blue"], "They want to know how many **blue** ribbons were cut."];

const count = (result, element) => {
  return result += element === "blue" ? 0 : 1;
}

const question1Answear = (data, helper) => {
  return data.reduce(helper, 0);
}

const showReuslt = (description, functionToUse, helper) => {
  const data = description[2];
  console.log(description[0]);
  console.log(description[1]);
  console.log(data);
  console.log(description[3]);
  const result = functionToUse(data, helper)
  console.log("result", result);
}

const main = () => {
  showReuslt(QUESTION1, question1Answear, count)
}

main();