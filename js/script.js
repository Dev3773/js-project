class User {

  constructor(name) {
    this.name = name;
  }
}

const mango = new User("Mango");
console.log(mango); 


class Child extends User {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  add(a) {
    this.age = a;
  }

}

const baby = new Child("baby", 77777);

console.log(baby);

baby.a = 55555;
console.log(baby);
