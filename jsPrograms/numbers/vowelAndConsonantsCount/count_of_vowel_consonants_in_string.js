const stringToCheck = "sagnik";

let vowelCounts = 0;
let consonantsCounts = 0;
const lengthOfString = stringToCheck.length;

for(let currentTerm = 0; currentTerm < lengthOfString; currentTerm++) {
  
  switch (stringToCheck[currentTerm]) {
    case "a" :
    case "e" :
    case "i" :
    case "o" :
    case "u" :
    case "A" :
    case "E" :
    case "I" :
    case "O" :
    case "U" :
      vowelCounts++;
      break;
    case " ":
      break;
    default :
      consonantsCounts++;
  }
}

console.log("String:-",stringToCheck,"vowel:-",vowelCounts,"consonants:-",consonantsCounts);
