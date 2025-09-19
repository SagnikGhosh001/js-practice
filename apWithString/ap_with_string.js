const limit = "..";
let currentTerm = "";
let sum = "";

while (currentTerm <= limit) {
  sum = sum + currentTerm;
  currentTerm = currentTerm + ".";
}


console.log(sum,sum.length);
