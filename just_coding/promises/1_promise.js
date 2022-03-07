//? 1) Pending

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value1");
  }, 0);
});

console.dir({
  promise1,
}); // Promise { <pending> }
promise1.then(console.log); // 'value1' (delayed)

//? 2) Immediate resolve

const promise2 = new Promise((resolve) => resolve("value2"));
console.dir({
  promise2,
}); // Promise { 'value2' }
promise2.then(console.log); // 'value2'

//? 3) Immediate reject

const promise3 = new Promise((resolve, reject) => {
  reject(new Error("I have no value for you :("));
});
console.dir({
  promise3,
}); // Promise { <rejected> Error... }
promise3.then(console.log).catch(console.log); // Error...

//! Promise.resolve и Promise.reject - short-hand
//! для 2) и 3) случаев
