// // // console.log("up");

import console, { log } from "node:console";

// const myFirstPromise = new Promise((resolve, reject) => {
//   fetch("https://dummyjson.com/test")
//     .then((res) => res.json())
//     .then((data) => resolve(data));
// });

// myFirstPromise.then((successMessage) => {
//   console.log(`Yay!`, successMessage);
// });

// // console.log("down");

// // fetch("https://dummyjson.com/test")
// //   .then((res) => res.json())
// //   .then(console.log);

// const myPromise = new Promise((resolve, reject) => {
//   console.log("Promise executor started");

//   setTimeout(() => {
//     console.log("Timeout finished, now fetching");

//     fetch("https://dummyjson.com/test")
//       .then((res) => res.json())
//       .then((data) => resolve(data));
//   }, 3000);
// });

// setTimeout(() => {
//   console.log("set timeout then started");

//   setTimeout(() => {
//     console.log("in fancy start");
//     myPromise.then((data) => {
//       console.log("Resolved data:", data);
//     });
//     console.log("in fancy end");
//   }, 0);

//   console.log("set timeout then finished");
// }, 7000);

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// setTimeout(() => console.log("A"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("B");
//     return Promise.resolve("C");
//   })
//   .then(console.log);

// console.log("D");

// const task = (name, delay) => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       // console.log(name);
//       res(name);
//     }, delay);
//   });
// };

// task("1", 1000)
//   .then((x) => {
//     console.log(x);
//     return task("2", 1000);
//   })
//   .then((y) => {
//     console.log(y);
//     return task("3", 1000);
//   })
//   .then((z) => {
//     console.log(z);
//   });

// task("1", 1000)
//   .then(() => task("2", 1000))
//   .then(() => task("3", 1000));

// Promise.all([
//   task("X", 3000),
//   task("Y", 1000),
//   task("Z", 2000),
// ]).then(() => console.log("ALL DONE"));

// Promise.any([
//   task("X", 3000),
//   task("Y", 1000),
//   task("Z", 2000),
// ]).then(() => console.log("ALL DONE"));

// Promise.all([
//   Promise.resolve("A"),
//   Promise.reject("B"),
//   Promise.resolve("C"),
// ])
//   .then(console.log)
//   .catch(console.log);

// Promise.any([
//   Promise.resolve("A"),
//   Promise.reject("B"),
//   Promise.resolve("C"),
// ])
//   .then(console.log)
//   .catch(console.log);

// Promise.any([
//   Promise.reject("A"),
//   Promise.reject("B"),
//   Promise.resolve("C"),
// ]).then(console.log).catch(console.log);

// Promise.all([
//   Promise.reject("A"),
//   Promise.reject("B"),
//   Promise.resolve("C"),
// ]).then(console.log).catch(console.log);

// const tasks = [
//   () => task("A", 1000),
//   () => task("B", 2000),
//   () => task("C", 3000),
// ];

// task("A", 1000).then((x) => console.log(x));

// console.log(tasks.forEach((t) => t()));

// Promise.resolve(2).then((x) => console.log(x)).then(() => console.log("here1"));
// Promise.resolve(3).then((x) => console.log(x)).then(() => console.log("here2"));
// console.log("hi");

// const myPromise = new Promise((res, rej) => {
//   res(2);
// });

// myPromise.then((x) => console.log(x));

// console.log("before");

const myPromise = (name, des, delay) => {
  return new Promise((res) => {
    console.log(des);
    setTimeout(() => {
      console.log(name);
      res();
    }, delay);
  });
};

myPromise("A", "demoA", 1000).then(() => myPromise("A1", "demoA1", 1000));
myPromise("B", "demoB", 4000).then(() => console.log("B1"));
myPromise("C", "demoC", 1000).then(() => console.log("C1"));

// console.log("after");

// Promise.all([p1, p2, p3]).then(() => console.log("done"));
/*demoA
demoB
demoC
A
demoA1
A1
C
C1
B
B1
*/

Promise.reject("sagnik").then().then(
  (res) => console.log(res),
  (rej) => console.log(rej),
);
