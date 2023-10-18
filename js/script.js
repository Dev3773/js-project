// const arr = [5, 7, 3, 8, 10, 15, 30, 5, 7, 8, 20, 30, 40, 50];

// const arrObj = [
//   {name: 'bmw', model: 'x 6', age: 5, sellOn: true },
//   {name: 'audi', model: 'a 7', age: 3, sellOn: false},
//   {name: 'mersedes', model: 's500', age: 7, sellOn: true},
//   {name: 'tesla', model: 'model x', age: 2, sellOn: false},
//   {name: 'porshe', model: 'panomera', age: 1, sellOn: true },
// ];

// const result = arr.filter((item, idx, array) => !(array.indexOf(item) === idx));
// console.log(result);

// const age = a => a.reduce((acc, { age }) => acc + age, 0); 
// console.log(age(arrObj));

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tags = (tweets) =>
  tweets.reduce((acc, el) => {
    acc.push(el.tags);
    return acc;
  }, [])
  .flatMap(element => element)
  .filter((item, idx, array) => array.indexOf(item) === idx)
  .sort((a, b) => a.localeCompare(b));

console.log(tags(tweets));

// const ar = [5, 7, 30, 3, 4, 95, 8, 88];

// const arTwo = [...ar].sort((a, b) => a - b);
// console.log(arTwo);

// const arrString = ['Alla', 'Andrey', 'Vika', 'Bodya', 'Serzh', 'Cebit', 'cebit'];

// const resString = [...arrString].sort((a, b) => a.localeCompare(b));
// console.log(resString);

// const resTwoString = [...arrString].sort((a, b) => b.localeCompare(a));
// console.log(resTwoString);


// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const valSort = [...students].sort((a, b) => a.score - b.score);
// console.log(valSort);

// const strSort = [...students].sort((a, b) => a.name.localeCompare(b.name));
// console.log(strSort);


