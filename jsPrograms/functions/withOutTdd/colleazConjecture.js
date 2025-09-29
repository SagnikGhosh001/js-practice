function collazConjecture(numberToCheck) {

  while (numberToCheck > 1) {
    if (numberToCheck % 2 === 0) {
      numberToCheck = numberToCheck / 2;
    } else {
      numberToCheck = (3 * numberToCheck) + 1
    }
  }

  if (numberToCheck === 1) {
    return true;
  }

  return false;
}

for (let term = 1; term < 100; term++) {
  if (!collazConjecture(term)) {
    console.log("not Match");
  }
}

