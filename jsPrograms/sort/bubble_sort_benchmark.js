function totalIterationForSort(data) {
  let totalIteration = 0;
  const sortedArray = data.slice();

  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      totalIteration++;

      if (sortedArray[i] > sortedArray[j]) {
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }

  return totalIteration;
}

function randomNumberBetween(lower, upper) {
  return lower + Math.round(Math.random() * (upper - lower));
}

function createData(size) {
  const data = [];

  for (let index = 0; index < size; index++) {
    const randomNumber = randomNumberBetween(0, 100);
    data.push(randomNumber);
  }

  return data;
}

function runBenchMark(totalArrayGenerate) {
  if (totalArrayGenerate <= 0) return;

  for (let times = 1; times <= totalArrayGenerate; times++) {
    const data = createData(times);
    const totalIteration = totalIterationForSort(data);
    console.log("Length Of Array", times, "Number Of Times", totalIteration);
  }

}

function main(args) {
  runBenchMark(+args[0] || 10)
}

main(Deno.args);
