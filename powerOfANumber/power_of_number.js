const base = 2;
let exponential = 3;
let powerOfNumber = 1;

for (let i = 0; i < exponential; i++) {
  powerOfNumber = base * powerOfNumber;  
}

console.log("base is",base,"and exponential is",exponential,"so the answer is",powerOfNumber);
