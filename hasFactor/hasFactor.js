const input = 8;
let hasFactor = false;

// for (let i = 2; i < input ; i++) {
//   if (input % i === 0) {
//     hasFactor = true  
//   }
// }

let i = 2
while (i < input && !hasFactor) {
  if (input % i === 0) {
    hasFactor = true  
  }
  i++;
}


console.log(hasFactor);
