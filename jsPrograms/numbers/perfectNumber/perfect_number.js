const numberToCheck = 6;
const isPerfect = true
const suffix = isPerfect ? "Perfect Number" : "Not a Perfect Number";
let sum = 0;
let i = 1;
if(numberToCheck % i === 0) {
  sum = sum + i;
} 
i = i + 1;

if(numberToCheck % i === 0) {
  sum = sum + i;
}
i = i + 1;

if(numberToCheck % i === 0) {
  sum = sum + i;
}
i = i + 1;

if(numberToCheck % i === 0) {
  sum = sum + i;
}
i = i + 1;

if(numberToCheck % i === 0) {
  sum = sum + i;
}
i = i + 1;

console.log(sum);

console.log(numberToCheck,suffix)
