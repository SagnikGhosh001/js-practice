const numberToCheck = 1;
let countOfDivisor = 0;

for(let currentTerm = 1; currentTerm <= numberToCheck; currentTerm++) {

  countOfDivisor = (numberToCheck % currentTerm === 0 ) ? countOfDivisor + 1 : countOfDivisor;
}


console.log("Input",numberToCheck,"Divisor Count",countOfDivisor);
