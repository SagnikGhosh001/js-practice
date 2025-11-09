const sentences = [
  'just a phrase',
  'also another phrase',
  'arbitrary phrase',
  'An interesting phrase'
]

const wordsStartsWithA = sentences
  .flatMap(ele => ele.split(" "))
  .filter(ele => ele.toLowerCase()
    .startsWith("a"));

console.log(wordsStartsWithA);