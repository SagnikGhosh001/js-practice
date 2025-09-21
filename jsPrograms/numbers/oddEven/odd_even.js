const startOfRange = 0;
const endOfRange = 10;

for (let currentTerm = startOfRange; currentTerm <= endOfRange; currentTerm++) {

  const suffix = (currentTerm % 2 === 0) ? "Even" : "Odd";
  console.log(currentTerm,suffix);
}
