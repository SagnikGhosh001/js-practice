console.log("1");
setTimeout(() => console.log("2"), 0);

Promise.resolve()
  .then(() => console.log("3"))
  .then(() => console.log("4"));

async function asyncFunc() {
  console.log("5");

  try {
    await Promise.resolve();
    console.log("6");
    throw new Error("Oops");
    console.log("7");
  } catch (error) {
    console.log("8");
    return "caught";
  } finally {
    console.log("9");
  }

  console.log("10");
}

const result = asyncFunc();

result.then((val) => console.log("11", val));

Promise.resolve().then(() => {
  console.log("12");
  setTimeout(() => console.log("13"));
});

console.log("14");
