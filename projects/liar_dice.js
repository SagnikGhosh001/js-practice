function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function shouldChange() {
  return Math.random() > 0.5;
}

function changeNumberBasedOnProbability(aiResponse) {
  return shouldChange ? randomNumberBetween(1, 6) : aiResponse;
}

function play(point = 0) {
  const aiResponse = randomNumberBetween(1, 6);
  const numberToShow = changeNumberBasedOnProbability(aiResponse);

  console.log(`AI :- I got ${numberToShow}`);

  const userResponse = confirm("What do you think he is telling correct?");
  const numberIsSameAndUserGussedRight = userResponse && numberToShow === aiResponse;
  const numberIsDiffAndUserGuessedRight = !userResponse && numberToShow !== aiResponse;

  if (numberIsSameAndUserGussedRight || numberIsDiffAndUserGuessedRight) {
    console.log("You are correct, be carefull fore next turn");
    point++;
    return play(point);
  }
  const numberIsSameAndUserGussedWrong = userResponse && numberToShow !== aiResponse;
  const msg = numberIsSameAndUserGussedWrong ? "lie" : "truth";
  console.log(`Oops he was telling ${msg} he got ${aiResponse}`);
  console.log("your point is", point);

}

play();
