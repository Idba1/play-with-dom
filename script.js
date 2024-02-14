/* console.log("hello");

const title = document.getElementById('title');
title.innerText = 'My JS power';
title.style.color = "blue";
console.log(title.innerText); */


/* const title2 = document.querySelector('#title');
title2.textContent = 'I am done with query selector';
console.log(title2) */


/* const items = document.getElementsByClassName('li-items');
// console.log(items.length);
for(let item = 0; item<items.length; item++){
    const element = items[item];
    element.style.color = 'green';
    element.innerText = "amar khushi"
    console.log(element);
} */


/* const myArr = Array.from(items);
console.log(myArr); */


/* const items2 = document.getElementsByClassName('li-items');
console.log(items2);

for(const item of items2){
    console.log(item);
    item.style.fontSize = '4rem';
    item.style.backgroundColor = 'lightblue';
} */


/* const item3 = document.querySelectorAll("li");
console.log(item3); */


/* const bodyName = document.querySelector('body');
console.log(bodyName.children); */


/* const items = document.querySelector(".lists");
console.log(items.children); */

/* const ul = document.getElementById('li-container');
console.log(ul.children); */

/* const ul = document.getElementById('li-container');
console.log(ul.parentElement); */


/* const ul = document.getElementById('li-container');
console.log(ul.previousElementSibling); */


/* const ul = document.getElementById('li-container');
console.log(ul.previousSibling); */


/* const ul = document.getElementById('li-container');
console.log(ul.nextSibling); */

/* const ul = document.getElementById('li-container');
console.log(ul.nextElementSibling.nextSibling); */

/* const ul = document.querySelector('ul');
console.log(ul.innerText);

const ul2 = document.querySelector('ul');
console.log(ul2.textContent); */

const ul = document.querySelector('ul');
ul.innerHTML = '<p>Hello</p>';
console.log(ul);

