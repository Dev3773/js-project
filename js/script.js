// const mainButoon = document.querySelector(".js-main-button");
// const addButoon = document.querySelector(".js-add-button");
// const removeButoon = document.querySelector(".js-remove-button");

// const onClick = (event) => {
//   console.log("click on add button");
//   console.log(event);

//   mainButoon.addEventListener("click", onTargetButton);
// };

// addButoon.addEventListener("click", onClick);


// removeButoon.addEventListener("click", () => {
//   console.log("remove event"); 

//   mainButoon.removeEventListener("click", onTargetButton);
// });

// function onTargetButton() {
//   console.log("Click on main button");
// };




// const inputRef = document.querySelector('.text-input');
// const outputRef = document.querySelector('.output');

// inputRef.addEventListener('input', (event => {
//   outputRef.textContent = event.currentTarget.value
// }));

// const formEl = document.querySelector(".form");
// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefoult();
//   console.log(event.currentTarget);
//   console.log('This is a submit of forms');
// }
 


// window.addEventListener('keydown', onKeypress);

// function onKeypress(event) {
//   console.log('event key: ', event.key);
//   console.log('event key: ', event.code);  
// }


// const submitRef = document.querySelector(".js-submit");

// const handClick = (event) => {
//   console.log(event);
// }

// submitRef.addEventListener('click', handClick);


// window.addEventListener("keydown", event => {
//   console.log(event.key);
// })



// const formRef = document.querySelector(".form");
// formRef.addEventListener("submit", (event) => preventDefault());

// const handValue = (event) => {
//   spanRef.textContent = event.currentTarget.value;
// };

// const imputRef = document.querySelector(".text-input");
// const spanRef = document.querySelector(".span");

// imputRef.addEventListener("input", handValue);



// const item = document.querySelector(".list--item");
// console.log(item);

// item.style.fontSize = '24px';
// item.style.color = 'tomato';

// const list = document.querySelector(".list");
// console.log(list);

// list.style.textTransform = 'uppercase';

// const itemAll = document.querySelectorAll(".list--item");
// console.log(itemAll);

// itemAll.style.fontSize = '24px';

// for (const item of itemAll) {
//   item.style.fontSize = '24px';
// }


// const list = document.querySelectorAll(".list");
// console.log(list);

// list.style.color = "blue";

// for (const item of list) {
//   item.style.color = "blue";
// }


// const img = document.querySelector(".image");
// console.log(img.alt);

// img.alt = "Macbooook";
// console.log(img.alt);

// const textRef = document.querySelector(".text");
// textRef.classList.add("cool", "great");
// console.log(textRef.classList);
// textRef.classList.replace("text", "oooooooo");


// const btn = document.querySelector('.btn');

// console.log(btn.dataset.action);
// btn.dataset.role = "admin";
// delete btn.dataset.role;


// const title = document.createElement("h2");
// title.classList.add("subtitle");
// title.setAttribute("title", "Zagolovok");
// title.dataset.action = "update";
// title.textContent = "My subTitle !!!";
// console.log(title);

// const img = document.querySelector(".image");
// img.after(title);
// title.remove();

// const art = document.querySelector(".article");
// console.log(art.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML = '');

const arr = ["HTML", "CSS", "JS", "REACT"];

const list = document.querySelector(".list");

const markup = arr.map((tech) => 
  `<li class"list--item">I study ${tech} !!!</li>`).join(" ");

// list.innerHTML = markup;

list.insertAdjacentHTML("afterbegin", markup);

