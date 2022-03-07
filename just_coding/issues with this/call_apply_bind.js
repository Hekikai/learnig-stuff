// const user = {
//   name: "Maxim",
//   isCool: true,
// };

// function sayHi(surname, num) {
//   console.log(`Hi, ${this.name} ${surname}. You won ${num}`);
// }

// //* BIND

// function bind(func, context, ...rest) {
//   return function (...args) {
//     let property = 228; //

//     context[property] = func;
//     let result = context[property](...rest.concat(args));

//     delete context[property];
//     return result;
//   };
// }

// const fn = bind(sayHi, user, "Maychik", 888);
// fn();
// console.log(user);

// // * CALL
// function call(func, context, ...rest) {
//   let property = 228;

//   context[property] = func;
//   let result = context[property](...rest);
//   delete context[property];
//   return result;
// }

// // call(sayHi, user, 'Myachik', '777');

// //* APPLY
// function apply(func, context, args) {
//   let property = 228;

//   context[property] = func;
//   let result = context[property](...args);

//   delete context[property];
//   return result;
// }

// // apply(sayHi, user, ['Myachik', '777']);

//! Call, apply и bind с помощью прототип

const obj = {
  name: "Artem",
  age: 19,
};

const secondObj = {
  name: "Valera",
  age: 20,
};

const showPerson = function (...args) {
  console.log(`${this.name} is ${this.age} years old`);
  console.log(args);
};

Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...secondArgs) {
    fn.myCall(context, ...args.concat(secondArgs));
  };
};

Function.prototype.myCall = function (context, ...args) {
  const property = Symbol(Math.random());
  context[property] = this;
  const result = context[property](...args);

  delete context[property];
  return result;
};

Function.prototype.myApply = function (context, args) {
  const property = Math.random();
  context[property] = this;
  const result = context[property](...args);

  delete context[property];
  return result;
};

console.log(showPerson.myBind(obj, 2, 3)(1, 2, 3, 4, 5));
