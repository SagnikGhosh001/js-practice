const limit = 15;
const startingValue = 2;

for (let number = startingValue ; number <= limit ; number++) {
  let isComposite = false
  let divisor = 2

  while (divisor < number && !isComposite) {
    if (number % divisor === 0) {
      isComposite = true  
    }
    divisor++;
  }
  
  const suffix = isComposite ? "Composite" : "Prime"
  console.log(number,suffix)
}
