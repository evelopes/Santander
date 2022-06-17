var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = Number(currentNumberWrapper.textContent);



function increment(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    emaior()   
}
function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    emaior()   
}

function emaior(){   
if(currentNumber < 0){
    currentNumberWrapper.style.color = 'red';
} else{
    currentNumberWrapper.style.color = 'black';
}
}