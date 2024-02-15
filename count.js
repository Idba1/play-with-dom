let sum = 0;

function clickMe(){
    // console.log('hello');
    const firstElement = document.getElementById('count');
    // console.log(firstElement);
    sum += 1;
    firstElement.innerText = sum;
}


const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function(){
    // console.log('runing');
    const firstElement = document.getElementById('count');
    sum -= 1;
    firstElement.innerText = sum;
})

