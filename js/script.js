// const animal = {
// legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";


// console.log(animal);
// console.log(dog);

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//    console.log(key) 
//   }
// }

// const answer = Object.keys(dog);
// console.log(answer);



// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   get email() {
//   return this.#email;
//   }
//   set email(mail) {
//     if (mail === '') {
//       console.log("Eror, empty line !!!");
//       return;
//     }
//     this.#email = mail;
//   }
// }

// const poly = new User({ name: "Poly", email: "poly@mail.com" });
// console.log(poly);

// const ob = {
//   name: "Манго",
//   email: "mango@mail.com",
// };

// const mango = new User(ob);
// console.log(mango);

// // mango.email = "stepaniuk.sergiy@gmail.com";
// mango.email = "";

// console.log(mango.email);

// class User {
//   #email;


// class User {
//   static takenEmails = [];
//   static isEmailTaken(email) {
//     return User.takenEmails.includes(email);
//   }

//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
// constructor({ name, email }) {
//   this.name = name;
//   this.#email = email;
// }

//   get email() {
//     return this.#email;
//   }
//   set email(mail) {
//     if (mail === '') {
//       console.log("Eror, empty line !!!");
//       return;
//     }
//     this.#email = mail;
//   }
// }

// const ob = new User({ name: "JavaScript", email: "stepaniuk.sergiy@gmail.com" });

// console.log(ob);


// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
// }


// class Employee {
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(n) {
//     this.#name = n;
//   }
// }

// class Doctor extends Employee {
//   constructor(name, profession) {
//     super(name);
//     this.profession = profession;
//   }
// }

// const medical = new Doctor("Isya", "Stomatolog");

// console.log(medical);