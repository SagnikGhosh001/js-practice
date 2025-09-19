// const result = 5 && 0 && 2
// console.log(result) // it will print 0 because 0 is the first likely false value which has occured

// const result = 5 && 1 && 2
// console.log(result) // it will print 2 because there is no likely false value

// const result = 0 || true || 1
// console.log(result) // it will print true

// const result = 5 || 0 || 0
// console.log(result)  // it will print 5 because for or the first likely truth value will be printed

// const result = 0 || 5 || 1
// console.log(result) // it will print 5 also because 5 is the first likely truth value

// const result = 0 || true || 5
// console.log(result) // it will also print 5
