let str = '777';
console.log(typeof str);
let s = str.replace('777', '50');
console.log(s);

const num = Number(s);
console.log(typeof num);

for (let i = 1; i <= s; i += 1) {
  if (!(i % 5)) {
console.log(i);
  }
}