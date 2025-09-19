const limit = 10;

for (let startingValue = 0; startingValue < limit; startingValue++){
  let input = startingValue;
  let factorialOutput = 1

  for (let currentTerm = 1; currentTerm <= input; currentTerm++){
    factorialOutput = factorialOutput * currentTerm
  }
  
  console.log('factorial of',input,'is',factorialOutput)
}
