// /**
//  * 
//  * @param {*} weidth 
//  * @param {*} height 
//  * @returns {Number}  
//  */

// function fn(weidth, height) {
//   return weidth * height;
// }

// const area = fn(5, 7);
// console.log(area);

// const obj = {
//   proName: 'Audi',
//   age: 5,
//   date: new Date(),
// };

// console.log(obj.date);

// const myArray = [5, 7, 9, 3, 2, 8];

// const twoArray = [50, 30, 80, 70];

// const threeArray = [...twoArray, ...myArray]
// console.log(threeArray);

// const first = { a: 1, b: 2, c: 20 };
// const second = { c: 3, d: 4, };

// const third = { ...second, ...first };
// console.log(third);

// const x = function (first, two, ...args) {
//   console.log(first);
//   console.log(two);
//   console.log(args);
// }

// x(1);
// x(1, 2);
// x(1, 2, 3, "four", "five");

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Cпокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const { title, author, rating } of books) {

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const books = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
//   obj: {
//     one: 1,
//     two: 2,
//     three: 3,
//   }
// };

// const { title, author, rating, obj: { one, two, tree } } = books;

// console.log(two);

// const arr = [10, 20, 30, 40];
// const [, , , forty] = arr;

// console.log(forty);

// function fan({
//   age: 5, old: 50,
// }) {
//   console.log(age);
// }

// fan();

// function book({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// book();

// function doStuffWithBook(book) {
//   const { title, rating, isPublic } = book;
//   console.log(title);
//   console.log(rating);
// }

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });
