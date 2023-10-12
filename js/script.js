// callback function
// const fn = (name) => {
// console.log(`Hello ${name}`);
// }

// //  higher order function
// const fnTwo = (name, callback) => {
//   callback(name);
//   console.log(`You are developer ${name}`);
// }

// fnTwo("Mango", fn);


// const fnTwo = (name, callback) => {
//   callback(name);
//   console.log(`You are developer ${name}`);
// }

// fnTwo("Mango", function fn(name) {
// console.log(`Hello ${name}`);
// });


// function processCall(name, onAvailable, onNotavailable) {
//   const bool = Math.random() > 0.5;
  
//   if (!bool) {
//     onAvailable(name);
//     return;
//   }
//   onNotavailable(name);
//   return;
// }

// function onAvailable(name) {
// console.log(`Ura ${name} the abonent is available !!!`);
// }

// function onNotavailable(name) {
// console.log(`Sorry ${name} the abonent is not available (((`);
// }

// processCall("Vasya", onAvailable, onNotavailable);


// const repeat = (n, callback) => {
//   for (let i = 1; i < n; i += 1) {
//     callback(i);
//   }
// }

// function value(val) {
// console.log(`I lern already ${val} years !!!`);
// }

// repeat(3, value);


// const arr = [5, 7, 0, 9, 10, 8, 3];

// arr.forEach((element, index, array) => {
//   console.log(`element - ${element}`);
//   // console.log(`index - ${index}`);
//   // console.log(`array - ${array}`);
// });


// const classic = () => {
    
// };
  
// const add = (...rest) => {
//   console.log(rest);
// };

// console.log(add(3, 4, 5, 8));


// const arr = [5, 7, 0, 9, 1, 8, 3];

// const x = arr.forEach((el, ind) => {
//   console.log(el, ind);
// });

// console.log(x);

