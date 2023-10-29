// const artRef = document.querySelector('.art');
// console.log(artRef);

// const subTitleRef = document.createElement("h2");
// subTitleRef.classList.add("article__subtitle");
// subTitleRef.setAttribute("id", "777");
// subTitleRef.textContent = "This is subtitle h2";
// console.log(subTitleRef);

// const textRef = document.createElement("p");
// textRef.classList.add("article__text");
// textRef.id = "myId"
// textRef.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error.";
// console.log(textRef);

// artRef.prepend(subTitleRef, textRef);
// console.log(artRef);



// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);
// title.innerHTML = "qwerty";
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);


const technologies = ["HTML", "CSS", "SCSS", "JavaScript", "GIT"];

const listRef = document.querySelector(".list");

const markup = technologies.map((technology) =>
  `<li class="item">${technology}</li>`).join('');

// listRef.innerHTML = markup; 
listRef.insertAdjacentHTML("afterbegin", markup); 


// const subRef = document.querySelector('.subtitle');
// subRef.innerHTML = ' ';
// technologies.map((item) => console.log(item));


const sectionRef = document.querySelector('.section');
const text = `<h1 class="title">My Title h1</h1>`;
sectionRef.insertAdjacentHTML("afterbegin", text);


