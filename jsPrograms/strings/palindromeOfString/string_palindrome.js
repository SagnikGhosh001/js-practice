const input = "oioi";

const isInputHasOneCharacter = (input.length === 1)
let isPalindrome = true;

let currentTerm = 0;

const middleOfString = (input.length % 2 === 0) ? input.length / 2 : (input.length - 1) / 2;

while (currentTerm < middleOfString && isPalindrome && !isInputHasOneCharacter) {
  if(input[currentTerm] !== input[input.length - currentTerm - 1]) {
    isPalindrome = false;
  }
  currentTerm++
}

const suffix = isPalindrome ? "Pallindrome" : "Not Pallindrome"

console.log(input,suffix);
