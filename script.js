/* console.log("hello");

const title = document.getElementById('title');
title.innerText = 'My JS power';
title.style.color = "blue";
console.log(title.innerText); */


/* const title2 = document.querySelector('#title');
title2.textContent = 'I am done with query selector';
console.log(title2) */

const items = document.getElementsByClassName('li-items');
// console.log(items.length);
for(let item = 0; item<items.length; item++){
    const element = items[item];
    element.style.color = 'green';
    element.innerText = "amar khushi"
    console.log(element);
}