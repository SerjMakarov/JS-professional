let elText = document.querySelector('.block__text');
let elInput = document.querySelector('.block__item'); 

elInput.addEventListener('keyup', getInput);

function getInput(){
    regexp = /\'/ig;
    let result = elInput.value.replace(regexp, "\"");
    elText.innerHTML = result; 
}





