const menuRef = document.querySelector(".menu");
const menuEl = document.querySelector(".menu__item");

const str = ['Java Script', 'HTML', 'CSS'];

const cr = document.createElement('h1');
cr.textContent = `I like ${str[0]} !`; 
cr.classList.add('title');
console.log(cr);

menuRef.before(cr); 

const btnRef = document.createElement('button');
btnRef.type = 'button';
btnRef.textContent = 'Button';
btnRef.style.backgroundColor = 'blue';
btnRef.style.textAlign = 'center';
btnRef.style.margin = '10px';
menuRef.after(btnRef);
 
console.log(btnRef);







