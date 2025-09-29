function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  const roundOfRandomNumber = Math.round(randomNumber);

  console.log(roundOfRandomNumber);
}

randomNumberBetween(3, 10);
