const limit = 100;
const staringRange = 1;

console.log("From",staringRange,"to",limit,"all palindrome numbers are:-")

for (let number = staringRange; number < limit; number++){
  let inputCopy = number
  let reverseResult = 0
  
  while (inputCopy != 0){
    let remainder = 0
    remainder = inputCopy % 10
    reverseResult = reverseResult * 10 + remainder
    inputCopy = (inputCopy - remainder) / 10
  }
  
  if(number === reverseResult){
    console.log(number)
    
  }
}
