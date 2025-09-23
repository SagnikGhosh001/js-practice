function greatestAmongTwo(a, b) {
  return a > b ? a : b;
}

function greatestAmongThree(a,b,c) {
  return greatestAmongTwo(greatestAmongTwo(a,b),c);
}

console.log(greatestAmongThree(2,34,7));
