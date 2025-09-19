const limit = 100;
const staringRange = 1;

console.log("From",staringRange,"to",limit,"all prime numbers are:-")

for (let number = staringRange; number < limit; number++){
  let inputCopy = number
  let remainder = 0
  let reverseResult = 0
  
  while (inputCopy != 0){
    remainder = inputCopy % 10
    reverseResult = reverseResult * 10 + remainder
    inputCopy = inputCopy / 10
    if(remainder){
      inputCopy = inputCopy - (remainder/10)
    }  
  }
  
  if(number === reverseResult){
    console.log(number)
    
  }
}
