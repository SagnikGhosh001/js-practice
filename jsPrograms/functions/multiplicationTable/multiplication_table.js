function multiply(a, b) {
  return a * b;
}

function printTable(a, limit) {
  for (let currentTerm = 0; currentTerm <= limit; currentTerm++) {
    const product = multiply(a,currentTerm);
    console.log(a,"*",currentTerm,"=",product);
  }
}

printTable(3,10);
