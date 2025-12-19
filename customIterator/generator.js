function* generator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const s = generator();
const i = Iterator.from(s);

// const arr = i
//   .map((x) => {
//     console.log("Map :", x);
//     return x * x;
//   })
//   .filter((x) => {
//     console.log("filter :", x);
//     return !(x & 1);
//   })
//   .reduce((sum, x) => {
//     console.log("reduce :", x);
//     return sum + x;
//   }, 0);

const refOfNext = i.next;

i.next = function (...args) {
  console.log("in next", args);
  return refOfNext.call(i);
};

const refOfTake = i.take.bind(i);

i.take = function (...args) {
  console.log("in take", args);
  return refOfTake(...args);
};
