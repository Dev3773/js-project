// const bookShelf = {
//   books: ["java", "css", "html"],

//   getBooks() {
//     return this.books;
//   },

//   addBook(bookName) {
//     this.books.push(bookName);
//   },

//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   }
// };

// console.log(bookShelf.getBooks());

// bookShelf.addBook("pyton");
// console.log(bookShelf.getBooks());

// bookShelf.removeBook("html");
// console.log(bookShelf.getBooks());

// const animal = {
// legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Bim";

// console.log(animal);
// console.log(dog);
 
// const book = {
//   proName: 848,
//   likes: 158,
//   parcase: 8,
//   raiting: 5.38,
// };

// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key);
//   console.log(book[key]);
// }

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.383,
  },
  {
    title: "Спокойных вод",
    author: "Роберт Шекли",
    rating: 8.513,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.753,
  },
];

let total = 0;

for (const book of books) {
  total += book.rating;
  console.log(book.rating);
}

const result = (total / books.length).toFixed(2);
console.log(result);
