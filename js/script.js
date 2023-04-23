// console.dir(window.document);
// console.dir(document);

const menuEl = document.querySelector(".menu__item");
// console.log(menuEl);

menuEl.setAttribute('name', 'Atribut');
console.log(menuEl.getAttribute('name'));

console.log(menuEl.dataset.action);

const inputRef = document.querySelector('input');
inputRef.value = 'Display Input !!!';
 
const mEl = document.querySelector(".menu");
const chaild = mEl.children[2];
console.log(chaild);






