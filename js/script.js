// function urlGen(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   }
// } 

// const comUrl = urlGen('com');

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
// console.log(comUrl('github'));


// const user = {
//   authors: ['JS', 'CSS'],
//   getAuthors() {
// return this.authors;
//   },
//   addAuthors(val) {
//     this.authors.push(val);
//   },
// };

// console.log(user.getAuthors());
// user.addAuthors('HTML');
// console.log(user.getAuthors());

// function foo() {
//   console.log(this);
// };

// foo();

// const ob = {
//   userName: 'Petya',
//   metOb() {
// console.log(this);
//   },
// };

// ob.metOb();

// function fun() {
//   console.log('This is the object:', this);
// }

// const ob = {
//   user: 'Vasya',
// };

// ob.met = fun;

// ob.met();

// function greetGuests(griting) {
//   console.log(`${griting}, ${this.userName} !!!`);
// } 

// const obM = {
//   userName: "Mango",
// };

// const obP = {
//   userName: "Poly",
// };

// greetGuests.call(obM, "Walcome");
// greetGuests.apply(obP, ["Walcome"]);

// const b = greetGuests.bind(obM);
// b("Walcome");


// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer));



// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };

// const result = greet.bind(steam);
// console.log(result("Sergio"));

