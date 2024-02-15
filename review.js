let serialCount = 1;

document.getElementById('submit-btn').addEventListener('click', function(){
    console.log('hello');

    // const inputArea = document.getElementById('text-area');
    // const inputValue = inputArea.value;

    const inputValue = document.querySelector('textarea').value;
    console.log(inputValue);


    const container = document.getElementById('review');

    const p = document.createElement('p');
    p.innerText = serialCount + "." + inputValue;
    serialCount += 1;

    container.appendChild(p);
    document.querySelector('textarea').value = '';
})