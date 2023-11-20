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
 


window.addEventListener('keydown', onKeypress);

function onKeypress(event) {
  console.log('event key: ', event.key);
  console.log('event key: ', event.code);  
}


const submitRef = document.querySelector(".js-submit");

const handClick = (event) => {
  console.log(event);
}

submitRef.addEventListener('click', handClick);


window.addEventListener("keydown", event => {
  console.log(event.key);
})



const formRef = document.querySelector(".form");
formRef.addEventListener("submit", (event) => preventDefault());

const handValue = (event) => {
  spanRef.textContent = event.currentTarget.value;
};

const imputRef = document.querySelector(".text-input");
const spanRef = document.querySelector(".span");

imputRef.addEventListener("input", handValue);

